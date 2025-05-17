import SectionHeader from '@/components/SectionHeader';
import { pageLinks } from '@/const/pagelinks';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <SectionHeader
        subHead='daikoku tutorial'
        title='大黒工業の仕事チュートリアル'
        description='大黒工業の仕事の作業手順などの説明を行うサイトです。グーグルなどの検索エンジンではヒットしないように設定しています。外部の方には共有しないようにお願いします'
      />

      <section className=''>
        <div className='flex flex-col py-12'>
          <div className='divide-y divide-gray-300'>
            {pageLinks.map((link) => (
              <div
                key={link.title}
                className='mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0'
              >
                <div className='col-span-full flex items-center justify-center lg:col-span-1'>
                  {link.logo && <link.logo className='h-16 w-16' />}
                </div>
                <div className='col-span-full flex flex-col justify-center text-center lg:col-span-3 lg:text-left'>
                  <Link
                    href={link.path}
                    className='font-bold text-2xl text-blue-500 hover:text-blue-600 hover:underline'
                  >
                    {link.title}
                  </Link>
                  <span className='mt-4 text-gray-700'>{link.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
