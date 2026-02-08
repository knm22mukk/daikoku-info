import {
  CONTENT_TYPES,
  type Tutorial,
  getTutorialDetail,
  getTutorialList,
  isValidContentType,
} from '@/libs/microcms';
import { formatDate } from '@/libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    contentType: string;
    id: string;
  }>;
};

export async function generateStaticParams() {
  // 各エンドポイントの全記事IDを取得して静的パスを生成
  const paths = [];

  for (const contentType of Object.keys(CONTENT_TYPES)) {
    try {
      const { contents } = await getTutorialList(contentType, {
        fields: ['id'],
        limit: 100, // 必要に応じて調整
      });

      paths.push(
        ...contents.map((content) => ({
          contentType,
          id: content.id,
        })),
      );
    } catch (error) {
      console.error(`Error fetching ${contentType}:`, error);
    }
  }

  return paths;
}

export async function generateMetadata({ params }: Props) {
  const { contentType, id } = await params;

  if (!isValidContentType(contentType)) {
    return {
      title: 'ページが見つかりません',
    };
  }

  try {
    const config = CONTENT_TYPES[contentType];
    const article = await getTutorialDetail(config.endpoint, id);

    return {
      title: `${article.title} | ${config.name}`,
      description: article.description,
    };
  } catch {
    return {
      title: 'ページが見つかりません',
    };
  }
}

export default async function ContentDetailPage({ params }: Props) {
  const { contentType, id } = await params;

  // 無効なコンテンツタイプの場合は404
  if (!isValidContentType(contentType)) {
    notFound();
  }

  const config = CONTENT_TYPES[contentType];

  // 記事詳細を取得
  let article: Tutorial;

  try {
    article = await getTutorialDetail(config.endpoint, id);
  } catch {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <nav className='mb-8 text-sm'>
        <ol className='flex items-center gap-2 text-gray-600'>
          <li>
            <Link href='/' className='hover:text-blue-600'>
              ホーム
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${contentType}`} className='hover:text-blue-600'>
              {config.name}
            </Link>
          </li>
          <li>/</li>
          <li className='text-gray-900'>{article.title}</li>
        </ol>
      </nav>

      <article className='mb-12'>
        {article.image ? (
          <Image
            src={article.image.url}
            alt={article.title}
            width={1280}
            height={720}
          />
        ) : (
          <h1 className='mb-4 font-bold text-4xl'>{article.title}</h1>
        )}

        <div className='flex items-center gap-4 text-gray-600 text-sm py-12'>
          <p>公開日：{formatDate(article.publishedAt || article.createdAt)}</p>
          {article.updatedAt && <p>更新日：{formatDate(article.updatedAt)}</p>}
        </div>

        <div
          className='prose prose-lg max-w-none'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: microCMSからの信頼できるHTMLのみ出力
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        <div className='mt-12 border-t pt-8'>
          <Link
            href={`/${contentType}`}
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800'
          >
            <span>←</span>
            <span>{config.name}一覧に戻る</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
