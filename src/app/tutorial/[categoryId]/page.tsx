import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import { getCategoryDetail, getTutorialList } from '@/libs/microcms';

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

export default async function page({ params }: Props) {
  const { categoryId } = await params;
  const categoryData = await getCategoryDetail(categoryId);
  const contentData = await getTutorialList(categoryId, { limit: 12 });
  if (contentData.contents.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <main>
      <SectionHeader
        subHead={categoryId}
        title={`${categoryData.name}の作業手順`}
        description={`${categoryData.name}に関しての概要や各種作業手順などを説明します。`}
      />
      <Card tutorials={contentData.contents} />
    </main>
  );
}
