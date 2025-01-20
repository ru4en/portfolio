import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Post } from '../Types';
import TagComponent from '../Common/Tag';
import { ChevronUp } from 'lucide-react';
import Background from '../Common/Background';

const BlogPage: React.FC<{ post: Post }> = ({ post }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
    <Background iconNames={post.icons || []} />
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-1.5 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 backdrop-blur-lg"
          style={{ width: `${readingProgress}%`, transition: 'width 0.2s ease' }}
        />
      </div>

      <div className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mt-12 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 bg-opacity-20
          to-green-400 dark:from-blue-900 dark:via-cyan-800 dark:to-green-600
          filter blur-3xl" />
          <div className="relative px-6 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
                <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                By {post.authors?.join(', ')}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl border dark:border-gray-700
          transition-shadow duration-300 backdrop-blur-md dark:backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50
          ">
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags?.map((tag) => (
                <TagComponent key={tag} tag={tag} hideIcon={true} />
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-600 prose-p:dark:text-gray-300 prose-p:leading-relaxed
              prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12
              prose-a:text-blue-500 prose-a:dark:text-blue-400 prose-a:font-medium
              prose-a:no-underline hover:prose-a:text-cyan-500
              prose-blockquote:border-l-cyan-500
              prose-strong:text-cyan-700 dark:prose-strong:text-cyan-300
              max-w-none">
              <Markdown
                className="markdown"
                options={{
                  overrides: {
                    img: {
                      props: {
                        className: 'w-full object-cover hover:shadow-2xl transition-shadow duration-300'
                      }
                    },
                    a: {
                      props: {
                        className: 'hover:text-cyan-500 transition-colors duration-200',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    }
                  }
                }}
              >
                {post.content}
              </Markdown>
            </div>
          </div>
        </article>
      </div>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-400 to-cyan-400 
          rounded-full shadow-lg text-white transition-all duration-300 hover:shadow-2xl
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BlogPage;