import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { getTutorialList } from '@/libs/microcms';

export default async function page() {
  const data = await getTutorialList('rakuraku', { limit: 12 });
  return (
    <main>
      <SectionHeader
        subHead='rakuraku'
        title='楽楽精算の作業手順'
        description='楽楽精算の作業手順や旅費などの社内規定を記載します'
      />
      <Card tutorials={data.contents} />
      <div className='p-12'>{data.totalCount}</div>
    </main>
  );
}
