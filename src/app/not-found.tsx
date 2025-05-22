'use client';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import { TbError404 } from 'react-icons/tb';

export default function NotFound() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <section className='flex items-center justify-center p-16'>
      <div className='flex flex-col items-center justify-center space-y-8 px-5 text-center'>
        <TbError404 className='h-40 w-40 text-gray-400' />
        <p className='text-3xl'>
          ページが見つかりませんでした。
          <br />
          URLに誤りがあるか、ページが削除された可能性があります。
        </p>
        <Button type='button' onClick={handleClick}>
          前のページに戻る
        </Button>
      </div>
    </section>
  );
}
