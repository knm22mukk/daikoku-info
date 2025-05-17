import Card from '@/components/Card';
import { getInfoList } from '@/libs/microcms';

export default async function page() {
  const data = await getInfoList({ limit: 12 });
  return (
    <div>
      <Card infos={data.contents} />
      <div className='p-12'>{data.totalCount}</div>
    </div>
  );
}
