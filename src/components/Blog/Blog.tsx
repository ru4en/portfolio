import { useEffect, useState } from 'react';
import { Post } from '../Types';
import { getBlogPost } from './BlogParser';
import { BlogCard } from './BlogCard';

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
        setError('Failed to load blog posts');
        console.error(err);
      }
    };

    loadBlogPosts();
  }, []);

  return (
    <div className="blog flex flex-col items-center space-y-10 py-20 min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 dark:from-cyan-800 dark:to-teal-800">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          Blog
        </h1>

        {error && (
          <div className="text-center p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {!error && blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Stay Tuned!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Blog posts coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;