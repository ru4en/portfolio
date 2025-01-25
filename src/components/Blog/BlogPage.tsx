import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Post } from '../Types';
import TagComponent from '../Common/Tag';
import { ChevronUp, ChevronLeft } from 'lucide-react';
import Background from '../Common/Background';
import { copyToClipboard } from '../Common/Clipboard';
import ReactDOM from 'react-dom';
import ImageWrapper from '../Common/ImageWrapper';

const BUTTON_STYLES = "p-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-500 transition-all duration-200";

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

  const goBack = () => {
    window.history.back();
  };

  const addCopyButtons = (): void => {
    const pres = document.querySelectorAll('article pre');

    pres?.forEach((pre) => {
      if (pre.querySelector('.copy-button')) return;
      const copyButton = document.createElement('button');
      copyButton.className = `${BUTTON_STYLES} copy-button`;
      const icon = document.createElement('span');
      icon.className = 'fas fa-copy';
      copyButton.appendChild(icon);

      const handleClick = async () => {
        const text = pre.textContent;
        if (!text) return;
          copyToClipboard(text);
        };

      copyButton.addEventListener('click', handleClick);
      pre.appendChild(copyButton);
    });
  };

  useEffect(() => {
    addCopyButtons();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('article img');
      images.forEach((img) => {
        const wrapper = document.createElement('div');
        const parent = img.parentNode;
        if (parent) {
          parent.replaceChild(wrapper, img);
          const imageElement = img as HTMLImageElement;
          const ImageComponent = <ImageWrapper src={imageElement.src} alt={imageElement.alt} />;
          ReactDOM.render(ImageComponent, wrapper);
        }
      });
    }
  }, []);

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
        <div className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm mt-12 ring-4 ring-cyan-400/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 opacity-40 
          to-green-400 dark:from-blue-900 dark:via-cyan-800 dark:to-green-600
          " />
          <div className="relative px-6 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <button
                onClick={goBack}
                aria-label="Go back to blogs"
                className="absolute top-4 left-4 p-2 shadow-lg rounded-lg text-gray-800 dark:text-gray-200
                bg-white dark:bg-cyan-800 transition-all duration-300 bg-opacity-60 dark:bg-opacity-60
                backdrop-blur-lg dark:backdrop-blur-lg hover:scale-110 flex items-center gap-2"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                <span className="text-sm font-medium hidden sm:block">/blogs</span>
              </button>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-emerald-900 dark:text-white mb-6 tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-emerald-900 dark:text-white">
                <span className="bg-white/40 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/60 transition-colors duration-200 dark:bg-white/20 dark:hover:bg-white/40">
                By {post.authors?.join(', ')}
                </span>
                <span className="bg-white/40 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/60 transition-colors duration-200 dark:bg-white/20 dark:hover:bg-white/40">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="bg-white/40 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/60 transition-colors duration-200 dark:bg-white/20 dark:hover:bg-white/40">
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12  hover:shadow-2xl
          transition-shadow duration-300 backdrop-blur-md dark:backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 ring-4 ring-gray-300/50 dark:ring-cyan-700/50
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
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-400 to-cyan-400 
          rounded-full shadow-lg text-white transition-all duration-300 hover:shadow-2xl z-50
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BlogPage;