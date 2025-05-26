import { Button } from '@/components/Button';
import { getTutorialDetail } from '@/libs/microcms';
import Link from 'next/link';

type Props = {
  params: Promise<{
    categoryId: string;
    contentId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { categoryId, contentId } = await params;
  const data = await getTutorialDetail(categoryId, contentId);
  return (
    <>
      <h1 className='py-12 text-center font-bold text-5xl'>{data.title}</h1>
      <p className='py-6 text-center font-bold text-blue-600 text-xl'>
        {data.description}
      </p>
      <Link
        href={`/tutorial/${data.category.id}`}
        className='flex justify-end p-6 font-bold underline'
      >
        {`${data.category.name}一覧へ戻る`}
      </Link>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: data.body }}
        className='prose mx-auto max-w-screen-md'
      />
      <div className='flex justify-center p-12'>
        <Link href={`/tutorial/${data.category.id}`}>
          <Button type='button'>{`${data.category.name}一覧へ`}</Button>
        </Link>
      </div>
    </>
  );
}
