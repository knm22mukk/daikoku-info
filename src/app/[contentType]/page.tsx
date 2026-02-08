import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/Button';
import Pagination from '@/components/Pagination';
import SectionHeader from '@/components/SectionHeader';
import {
  CONTENT_TYPES,
  getTutorialList,
  isValidContentType,
} from '@/libs/microcms';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  const limit = 24;

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
          <div className='py-12 text-center'>
            <p className='text-gray-500'>記事がまだありません</p>
            <Button type='button'>
              <Link href='/'>トップに戻る</Link>
            </Button>
          </div>
        ) : (
          <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {contents.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                contentType={contentType}
              />
            ))}
          </div>
        )}
      </div>

      <div className='py-12'>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath={`/${contentType}`}
        />
      </div>
    </main>
  );
}
