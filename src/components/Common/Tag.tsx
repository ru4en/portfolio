import React from 'react';
import SuperIcon from './SuperIcons';

const TagComponent: React.FC<{
  tag: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  hideIcon?: boolean;
}> = ({ tag, isSelected, onChange, onRemove, onClick, className, hideIcon = false }) => {
  let name = tag;
  if (tag.split(':').length > 1) {
    name = tag.split(':')[0];
  }

  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
    <span className={`rounded-full px-3 py-1 text-sm font-semibold flex items-center transition-all
       duration-200 hover:ring-2 ring-emerald-500/50 dark:ring-emerald-400/50
       ${className || 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200  hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105'}`}>
      {!hideIcon && <SuperIcon name={tag} className="w-4 h-4 mr-1" />}
  {
    onChange ? (
      <input
        type="text"
        value={tag}
        className={`bg-transparent border-none outline-none text-gray-800 dark:text-gray-200 w-full min-w-0 ${isSelected ? 'font-semibold' : ''}`}
        onChange={onChange}
        aria-label={`Tag ${tag}`}
        style={{
          minWidth: tag.length === 0 ? '80px' : 'auto',
          maxWidth: `calc(${tag.length}ch + .5rem)`,
        }}
      />
    ) : (
      <span>{name}</span>  // Just display the tag when no `onChange` is provided
    )
  }
  {
    onRemove && (
      <button type="button" onClick={onRemove} className="text-red-500">×</button>
    )
  }
    </span >
    </button>
  );
};

export default TagComponent;
