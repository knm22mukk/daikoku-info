import Image from 'next/image';
import Link from 'next/link';

const InfoCard = () => {
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-300 md:flex-row'>
      <Link
        href='/'
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
        <span className='text-gray-400 text-sm'>#楽楽精算</span>
        <h2 className='font-bold text-xl'>
          <Link
            href='/'
            className='transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            出張申請を作成しよう
          </Link>
        </h2>

        <p className='text-gray-500'>
          出張申請の作成手順を細かく説明します。出張申請の作成手順を説明します。
        </p>

        <div>
          <Link
            href='/'
            className='font-semibold text-blue-500 transition duration-100 hover:text-blue-600 hover:underline'
          >
            もっと読む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Card() {
  return (
    <div className='bg-white px-4 py-6 sm:py-8 lg:py-12'>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <InfoCard key={index} />
          ))}
      </div>
    </div>
  );
}
