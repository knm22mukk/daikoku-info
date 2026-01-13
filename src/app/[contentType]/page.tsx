import SectionHeader from '@/components/SectionHeader';
import {
  CONTENT_TYPES,
  getTutorialList,
  isValidContentType,
} from '@/libs/microcms';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoReaderOutline } from 'react-icons/io5';

type Props = {
  params: Promise<{
    contentType: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  // 静的生成するパスを返す
  return Object.keys(CONTENT_TYPES).map((contentType) => ({
    contentType,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { contentType } = await params;

  if (!isValidContentType(contentType)) {
    return {
      title: 'ページが見つかりません',
    };
  }

  const config = CONTENT_TYPES[contentType];

  return {
    title: `${config.name} | ブログ`,
    description: config.description,
  };
}

export default async function ContentListPage({ params, searchParams }: Props) {
  const { contentType } = await params;
  const resolvedSearchParams = await searchParams;

  // 無効なコンテンツタイプの場合は404
  if (!isValidContentType(contentType)) {
    notFound();
  }

  const config = CONTENT_TYPES[contentType];

  // クエリパラメータからページ番号を取得
  const page = resolvedSearchParams.page
    ? Number.parseInt(resolvedSearchParams.page as string)
    : 1;
  const limit = 10;

  // 記事一覧を取得
  const { contents, totalCount } = await getTutorialList(config.endpoint, {
    limit,
    offset: (page - 1) * limit,
  });

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <main className='max-w-screen-xl py-12'>
      <SectionHeader
        subHead={config.endpoint}
        title={config.name}
        description={config.description}
      />

      {/* 記事一覧 */}
      <div className='space-y-6'>
        {contents.length === 0 ? (
          <p className='py-12 text-center text-gray-500'>
            記事がまだありません
          </p>
        ) : (
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
            {contents.map((tutorial) => (
              <div
                key={tutorial.id}
                className='max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
              >
                <IoReaderOutline className='h-17 w-7' />
                <Link href={`/${contentType}/${tutorial.id}`}>
                  <h3 className='mb-2 font-bold text-2xl text-gray-900 hover:underline'>
                    {tutorial.title}
                  </h3>
                </Link>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                  {tutorial.description}
                </p>
                <Link
                  href={`/${contentType}/${tutorial.id}`}
                  className='inline-flex items-center font-bold text-blue-600 hover:underline'
                >
                  もっと見る
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className='mt-8 flex justify-center gap-2'>
          {page > 1 && (
            <Link
              href={`/${contentType}?page=${page - 1}`}
              className='rounded border px-4 py-2 hover:bg-gray-100'
            >
              前へ
            </Link>
          )}

          <span className='px-4 py-2'>
            {page} / {totalPages}
          </span>

          {page < totalPages && (
            <Link
              href={`/${contentType}?page=${page + 1}`}
              className='rounded border px-4 py-2 hover:bg-gray-100'
            >
              次へ
            </Link>
          )}
        </div>
      )}
    </main>
  );
}
