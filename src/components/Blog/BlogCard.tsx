import Markdown from 'markdown-to-jsx';
import { Post } from '../Types';
import { Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => (
  <article className="group hover:ring-4 cursor-pointer relative rounded-2xl 
    shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]
    backdrop-blur-lg 
    ring-2 ring-gray-500/30 dark:ring-cyan-700/30">
    {/* Gradient Border */}
    <div className="absolute backdrop-blur-lg dark:backdrop-blur-xl inset-0
      bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 
      opacity-10 group-hover:opacity-100 transition-opacity duration-300" />
    <a
      href={`/#/blog/${post.slug}`}
      className="inline-flex items-center gap-2 font-medium group/link decoration-none">
    {/* Content Container with small border offset */}
    <div className="relative m-[1px] rounded-2xl overflow-hidden">
      {/* Featured Image */}
      <div className="relative overflow-hidden h-40
        bg-gradient-to-br from-green-500/30 via-cyan-500/30 to-blue-800/30
        dark:from-green-600/20 dark:via-cyan-600/20 dark:to-blue-900/20
        backdrop-blur-sm"
      >
        <img
          src={post.image || '' }
          className="object-cover w-full h-full transform scale-110 transition-transform duration-300"
        />

        {/* Tags Overlay */}
        <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-lg text-white text-sm font-medium rounded-full px-3 py-1"
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
        <div className="prose dark:prose-invert prose-sm overflow-hidden line-clamp-3 h-25 text-gray-600 dark:text-gray-400">
          <Markdown>{(post.description ?? '').slice(0, 150) + '...'}</Markdown>
        </div>
      </div>
    </div>
    </a>
  </article>
);

export default BlogCard;