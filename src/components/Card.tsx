import type { Info } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';

type InfoProps = {
  info: Info;
};

type GridProps = {
  infos: Info[];
};

const InfoCard = ({ info }: InfoProps) => {
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-300 md:flex-row'>
      <Link
        href={`/information/rakuraku/${info.id}`}
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
        <span className='text-gray-400 text-sm'>{info.category.name}</span>
        <h2 className='font-bold text-xl'>
          <Link
            href={`/information/rakuraku/${info.id}`}
            className='transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            {info.title}
          </Link>
        </h2>

        <p className='text-gray-500'>{info.description}</p>

        <div>
          <Link
            href={`/information/rakuraku/${info.id}`}
            className='font-semibold text-blue-500 transition duration-100 hover:text-blue-600 hover:underline'
          >
            もっと読む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Card({ infos }: GridProps) {
  if (infos.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <div className='bg-white px-4 py-6 sm:py-8 lg:py-12'>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
        {infos.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}
