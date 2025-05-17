import { getInfoDetail } from '@/libs/microcms';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const data = await getInfoDetail(id);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.category.name}</p>
      <p>{data.body}</p>
    </div>
  );
}
