import type { Tutorial } from '@/libs/microcms';
import Link from 'next/link';
import { IoReaderOutline } from 'react-icons/io5';

type Props = {
  tutorials: Tutorial[];
};

export default function Card({ tutorials }: Props) {
  if (tutorials.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <div className='bg-white px-4 py-6 sm:py-8 lg:py-12'>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8'>
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className='max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
          >
            <IoReaderOutline className='h-17 w-7' />
            <Link href={`/tutorial/${tutorial.category.id}/${tutorial.id}`}>
              <h3 className='mb-2 font-bold text-2xl text-gray-900 hover:underline'>
                {tutorial.title}
              </h3>
            </Link>
            <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
              {tutorial.description}
            </p>
            <Link
              href={`/tutorial/${tutorial.category.id}/${tutorial.id}`}
              className='inline-flex items-center font-bold text-blue-600 hover:underline'
            >
              もっと見る
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
