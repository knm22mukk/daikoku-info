import type { Tutorial } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  tutorials: Tutorial[];
};

export default function Card({ tutorials }: Props) {
  if (tutorials.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <div className='bg-white px-4 py-6 sm:py-8 lg:py-12'>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-300 md:flex-row'
          >
            <Link
              href={`/tutorial/${tutorial.category.id}/${tutorial.id}`}
              className='group relative block h-48 w-full shrink-0 self-start overflow-hidden md:h-full md:w-32 lg:w-48'
            >
              <Image
                src='/moldpack_mp-2.jpeg'
                width={192}
                height={192}
                alt='画像の説明'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </Link>
            <div className='flex flex-col gap-2 p-4 lg:p-6'>
              <span className='text-gray-400 text-sm'>
                {tutorial.category.name}
              </span>
              <h2 className='font-bold text-xl'>
                <Link
                  href={`/tutorial/${tutorial.category.id}/${tutorial.id}`}
                  className='transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  {tutorial.title}
                </Link>
              </h2>
              <p className='text-gray-500'>{tutorial.description}</p>
              <div>
                <Link
                  href={`/tutorial/${tutorial.category.id}/${tutorial.id}`}
                  className='font-semibold text-blue-500 transition duration-100 hover:text-blue-600 hover:underline'
                >
                  もっと読む
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
