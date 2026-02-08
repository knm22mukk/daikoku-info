import Link from 'next/link';

type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: Props) {
  return (
    <nav
      className='mt-12 flex items-center justify-center gap-4'
      aria-label='ページネーション'
    >
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600'
        >
          前へ
        </Link>
      ) : (
        <span className='rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed bg-gray-50'>
          前へ
        </span>
      )}

      <div className='flex items-center gap-1 text-sm font-medium text-gray-700'>
        <span className='text-blue-600 font-bold'>{currentPage}</span>
        <span className='text-gray-400'>/</span>
        <span>{totalPages || 1}</span>
      </div>

      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600'
        >
          次へ
        </Link>
      ) : (
        <span className='rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed bg-gray-50'>
          次へ
        </span>
      )}
    </nav>
  );
}
