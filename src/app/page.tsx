import SectionHeader from '@/components/SectionHeader';
import { CONTENT_TYPES_ARRAY } from '@/libs/microcms';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <SectionHeader
        subHead='daikoku tutorial'
        title='大黒工業の仕事チュートリアル'
        description='大黒工業の仕事の作業手順などの説明を行うサイトです。グーグルなどの検索エンジンではヒットしないように設定しています。外部の方には共有しないようにお願いします'
      />
      <section className='flex flex-col py-12'>
        <div className='divide-y divide-gray-300'>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            {CONTENT_TYPES_ARRAY.map((link) => (
              <div key={link.key}>
                <Link
                  href={link.endpoint}
                  className='font-bold text-2xl text-blue-500 hover:text-blue-600 hover:underline'
                >
                  {link.name}
                </Link>
                <p>{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
