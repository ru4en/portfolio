import { useEffect, useState } from 'react';
import { Post } from '../Types';
import { getBlogPost } from './BlogParser';
import { BlogCard } from './BlogCard';
import Background from '../Common/Background';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetch('/blogs/published.json');
        if (!response.ok) throw new Error('Failed to fetch blog list');
        
        const { files } = await response.json();
        const posts = await Promise.all(
          files.map(async (filename: string) => {
            const response = await fetch(`/blogs/${filename}`);
            if (!response.ok) return null;
            
            const content = await response.text();
            const parsed = getBlogPost(content);
            
            return {
              ...parsed,
              slug: filename.replace('.md', ''),
            };
          })
        );

        setBlogPosts(posts.filter(Boolean));
      } catch (err) {
        setError('Failed to load blog posts!');
        console.error(err);
      }
    };

    loadBlogPosts();
  }, []);

  return (
    <div className="blog flex flex-col items-center space-y-10 py-20 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-green-900 text-gray-800 to-gray-400 to-gray-100 dark:text-white">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
    <Background iconNames={['code', 'terminal']} style="CLUTTERED" rotate="RANDOM" />
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          Blog
        </h1>
        {error && 
        <div className="card bg-red-500 text-white text-center p-4
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;