import { Button } from '@/components/Button';
import { getTutorialDetail } from '@/libs/microcms';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const data = await getTutorialDetail('rakuraku', id);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.category.name}</p>
      <p>{data.body}</p>
      <div className='p-12'>
        <Link href='/tutorial/rakuraku'>
          <Button type='button'>楽楽精算一覧へ</Button>
        </Link>
      </div>
    </div>
  );
}
