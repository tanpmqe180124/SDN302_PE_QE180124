'use client';

import { Post } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostCard({ post, onDelete }: PostCardProps) {
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      onDelete(post.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{post.name}</h3>
        <div className="flex gap-2">
          <Link
            href={`/posts/${post.id}/edit`}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
      
      {post.image && (
        <div className="relative h-48 w-full mb-4">
          <Image
            src={post.image}
            alt={post.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
} 