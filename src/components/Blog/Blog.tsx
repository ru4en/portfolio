import { useEffect, useState } from 'react';
import { Post } from '../Types';
import { getBlogPost } from './BlogParser';
import { BlogCard } from './BlogCard';
import Background from '../Common/Background';
import Spinner from '../Common/Utils/Spinner';

// Move Background outside and memoize the icons array
const BLOG_ICONS = ['code', 'terminal', 'read-cv-logo-duotone:pixelart'];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetch('/blogs/published.json');
        if (!response.ok) throw new Error('Failed to fetch blog list');
        
        const { files } = await response.json();
        const failedFiles: string[] = [];
        
        const posts = await Promise.all(
          files.map(async (filename: string) => {
            try {
              const response = await fetch(`/blogs/${filename}`);
              if (!response.ok) {
                failedFiles.push(`Failed to fetch ${filename}: ${response.status}`);
                return null;
              }
              
              const content = await response.text();
              const parsed = getBlogPost(content);
              
              return {
                ...parsed,
                slug: filename.replace('.md', ''),
              };
            } catch (err) {
              failedFiles.push(`Error loading ${filename}: ${err instanceof Error ? err.message : 'Unknown error'}`);
              return null;
            }
          })
        );

        setBlogPosts(posts.filter(Boolean));
        setWarnings(failedFiles);
        setError(''); // Clear any previous errors
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogPosts();
  }, []);


  return (
    <>
    <Background iconNames={BLOG_ICONS} layout="CLUTTERED" rotate="RANDOM" className="flex flex-col items-center space-y-10 py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-green-900 text-gray-800 to-gray-400 to-gray-100 dark:text-white z-10 relative min-h-screen">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
            Blog
          </h1>
          {error && 
          <div className="card bg-red-500 text-white text-center p-4
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            {error}
          </div>}
          
          {warnings.length > 0 && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg">
              <h3 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Some blog posts failed to load:
              </h3>
              <ul className="text-yellow-700 dark:text-yellow-300 text-sm">
                {warnings.map((warning, index) => (
                  <li key={index} className="mb-1">• {warning}</li>
                ))}
              </ul>
            </div>
          )}

        
        {isLoading ? (
              <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              post.hidden ? null :
              post.title && post.date && post.content ?
              <BlogCard key={post.slug} post={{ ...post, slug: post.slug }} />
              : null
            ))}
          </div>
        )}
      </div>
    </Background>
  </>
  );
};

export default Blog;
