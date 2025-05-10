import { Button, IconButton } from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
  return (
    <main>
      <h1 className='m-3 bg-gray-100 p-12 font-bold text-red-500'>
        daikoku infomation
      </h1>
      <div className='flex gap-8 p-12'>
        <Button />
        <IconButton />
      </div>
      <SectionHeader />
    </main>
  );
}
