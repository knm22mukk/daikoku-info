import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='mx-auto max-w-screen-xl px-4 md:px-8'>
      <div className='flex items-center justify-between py-6'>
        <Link
          href='/'
          className='inline-flex items-center gap-2.5'
          aria-label='大黒工業ロゴ'
        >
          <Image
            src='/daikoku-logo235x60.png'
            width={200}
            height={70}
            alt='大黒工業ロゴ'
          />
        </Link>

        <nav className='hidden gap-12 lg:flex'>
          <Link
            href='/'
            className='font-bold text-xl transition duration-100 hover:text-indigo-500 hover:underline'
          >
            Home
          </Link>
          <Link
            href='/'
            className='font-bold text-xl transition duration-100 hover:text-indigo-500 hover:underline'
          >
            Home
          </Link>
          <Link
            href='/'
            className='font-bold text-xl transition duration-100 hover:text-indigo-500 hover:underline'
          >
            Home
          </Link>
          <Link
            href='/'
            className='font-bold text-xl transition duration-100 hover:text-indigo-500 hover:underline'
          >
            Home
          </Link>
        </nav>

        <div className='-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start'>
          <Link
            href='/'
            className='inline-block rounded-lg px-4 py-3 text-center font-semibold text-gray-500 text-sm outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base'
          >
            dark
          </Link>

          <Link
            href='/'
            className='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center font-semibold text-sm text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'
          >
            contact
          </Link>
        </div>

        <button
          type='button'
          className='inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 font-semibold text-gray-500 text-sm ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden'
        >
          Menu
        </button>
      </div>
    </header>
  );
}
