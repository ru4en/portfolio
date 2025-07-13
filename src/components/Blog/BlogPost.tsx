import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BlogPage from './BlogPage'
import { Post } from '../Types'
import { getBlogPost } from './BlogParser'
import NotFound from '../Common/NotFound'
import Spinner from '../Common/Spinner'

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
        const parsedPost = getBlogPost(text);

        if (!parsedPost) {
          throw new Error('Failed to parse blog post');
        }

        const post: Post = { ...parsedPost, slug: slug! };

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

  if (state.isLoading) {
    return (
          <Spinner />
    );
  }

  if (state.error) {
    return <NotFound />;
  }

  return state.post ? <BlogPage post={state.post} /> : null;
};

export default BlogPost;