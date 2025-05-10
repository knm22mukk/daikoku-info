import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mx-auto max-w-screen-2xl px-4 md:px-8 pt-12'>
      <div className='flex flex-col items-center justify-between gap-4 border-t border-b border-gray-400 py-6 md:flex-row'>
        <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start md:gap-6'>
          <Link
            href='/'
            className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            Home
          </Link>
          <Link
            href='/'
            className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            Home
          </Link>
          <Link
            href='/'
            className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            Home
          </Link>
          <Link
            href='/'
            className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            Home
          </Link>
          <Link
            href='/'
            className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            Home
          </Link>
        </nav>
        <div className='flex gap-4'>
          <Link
            href='/'
            target='_blank'
            className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            rel='noreferrer'
          >
            G
          </Link>
          <Link
            href='/'
            target='_blank'
            className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            rel='noreferrer'
          >
            G
          </Link>
          <Link
            href='/'
            target='_blank'
            className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            rel='noreferrer'
          >
            G
          </Link>
          <Link
            href='/'
            target='_blank'
            className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            rel='noreferrer'
          >
            G
          </Link>
        </div>
      </div>

      <div className='py-8 text-center text-md text-gray-500'>
        © 2025 - Daikoku Infomation. All rights reserved.
      </div>
    </footer>
  );
}
