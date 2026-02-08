import type { ContentType, Tutorial } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
  article: Tutorial;
  contentType: ContentType;
};

export default function ArticleCard({ article, contentType }: Props) {
  return (
    <article className='group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
      <div className='relative flex h-48 w-full items-center justify-center bg-gray-100 overflow-hidden'>
        {article.image ? (
          <Image
            src={article.image.url}
            alt={article.title}
            fill
            className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center p-6 text-center'>
            <h3 className='text-lg font-bold text-gray-800 line-clamp-3'>
              {article.title}
            </h3>
          </div>
        )}
      </div>

      <div className='flex flex-1 flex-col p-5'>
        <time className='text-sm text-gray-500 mb-2'>
          {new Date(
            article.publishedAt || article.createdAt,
          ).toLocaleDateString('ja-JP')}
        </time>

        <p className='mb-4 line-clamp-2 text-sm text-gray-600 flex-1'>
          {article.description}
        </p>

        <Link
          href={`/${contentType}/${article.id}`}
          className='inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 transition-colors'
        >
          さらに読む
          <AiOutlineArrowRight className='h-4 w-4' />
        </Link>
      </div>
    </article>
  );
}
