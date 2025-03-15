import { useState } from 'react';
import clsx from 'clsx';

import FormattedDate from './FormattedDate.tsx';

type PostCardProps = {
  post: {
    id: string;
    data: {
      title: string;
      description: string;
      heroImage?: string;
      pubDate: Date;
      tags?: string;
      category?: string;
    };
  };
};

const PostCard = ({ post }: PostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const tags = post.data.tags?.split(' ');
  return (
    <a href={`/posts/${post.id}/`}>
      <article
        className="flex flex-col gap-6 w-full phone:w-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          width="100%"
          src={post.data.heroImage}
          alt={post.data.title}
          className={clsx('transition-all duration-300', isHovered && 'rotate-1 scale-101')}
        />
        <div>
          <p className="date">
            <FormattedDate date={post.data.pubDate} />
          </p>
          <h4
            className={clsx(
              'text-xl font-light transition-all duration-300',
              isHovered && 'text-blue-500'
            )}
          >
            {post.data.title}
          </h4>
        </div>
        <ul className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <li className="rounded-md bg-gray-900 text-gray-100 py-1 px-2 text-xs font-light">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </a>
  );
};

export default PostCard;
