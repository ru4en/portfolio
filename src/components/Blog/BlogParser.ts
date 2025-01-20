
import { Post } from '../Types';

const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('-').map(Number);
  if (!day || !month || !year) {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
  return new Date(year, month - 1, day);
};

export const getBlogPost = (content: string): Omit<Post, 'slug'> => {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    throw new Error('Invalid blog post format: Missing front matter');
  }

  const [, frontMatter, markdownContent] = match;
  const post: Partial<Post> = {
    content: markdownContent.trim()
  };

  frontMatter.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (!key || !values.length) return;

    const value = values.join(':').trim();
    switch (key.trim()) {
      case 'title':
        post.title = value;
        break;
      case 'date':
        post.date = parseDate(value);
        break;
      case 'author':
        post.authors = value.split(',').map(author => author.trim());
        break;
      case 'description':
        post.description = value;
        break;
      case 'tags':
        post.tags = value.split(',').map(tag => tag.trim());
        break;
      case 'icons':
        post.icons = value.split(',').map(icon => icon.trim());
        break;
    }
  });

  // Validate required fields
  if (!post.title) throw new Error('Missing required field: title');
  if (!post.date) throw new Error('Missing required field: date');
  if (!post.content) throw new Error('Missing required field: content');

  return {
    date: post.date,
    title: post.title,
    content: post.content,
    authors: post.authors,
    description: post.description,
    tags: post.tags,
    icons: post.icons
  };
};