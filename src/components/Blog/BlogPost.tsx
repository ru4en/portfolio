import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogPage from './BlogPage'
import { Post } from '../Types'
import { getBlogPost } from './BlogParser'

interface BlogState {
  error: string | null;
  post?: Post;
  isLoading: boolean;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [state, setState] = useState<BlogState>({
    error: null,
    isLoading: true
  });

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const publishedResponse = await fetch('/blogs/published.json');
        const publishedData = await publishedResponse.json();
        
        const blogFile = publishedData.files.find((file: string) => 
          file.replace('.md', '') === slug
        );

        if (!blogFile) {
          throw new Error('Blog post not found');
        }

        const response = await fetch(`/blogs/${blogFile}`);
        if (!response.ok) {
          throw new Error('Failed to load blog post');
        }

        const text = await response.text();
        const post = getBlogPost(text);

        setState({ 
          error: null,
          post,
          isLoading: false
        });
      } catch (err) {
        setState({ 
          error: err instanceof Error ? err.message : 'Failed to load blog',
          isLoading: false
        });
      }
    };

    if (slug) loadBlog();
  }, [slug]);

  if (state.error) {
    return <div className="text-red-600 dark:text-red-400 p-8 text-center">{state.error}</div>;
  }

  if (state.isLoading) {
    return <div className="animate-pulse p-8 text-center">Loading...</div>;
  }

  return state.post ? <BlogPage post={state.post} /> : null;
};

export default BlogPost;