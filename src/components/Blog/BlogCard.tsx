import Markdown from 'markdown-to-jsx';
import { Post } from '../Types';
import { Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => (
  <article className="group  hover:ring-4 cursor-pointer relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]">
    {/* Gradient Border */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Content Container with small border offset */}
    <div className="relative m-[1px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
      {/* Featured Image */}
      <div className="relative overflow-hidden max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96">
        {/* Tags Overlay */}
        <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full px-3 py-1"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Clock className="w-4 h-4" />
          {post.date.toDateString()}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        <div className="prose dark:prose-invert prose-sm overflow-hidden mb-4 line-clamp-3 h-20">
          <Markdown>{(post.description ?? '').slice(0, 150) + '...'}</Markdown>
        </div>

        {/* Read More Link */}
        <a
          href={`/#/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  </article>
);

export default BlogCard;