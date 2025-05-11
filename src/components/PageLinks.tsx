import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LinkItem = () => {
  return (
    <div className='flex flex-col px-8 py-6'>
      <h2 className='title-font mb-2 font-bold text-lg sm:text-xl'>
        Components
      </h2>
      <p className='mb-4 flex-1 text-base text-gray-500'>
        Individual components that can be re-used multiple times in your
        designs.
      </p>
      <Link
        className='inline-flex items-center space-x-2 text-blue-600 text-sm'
        href='/components'
      >
        <span>Learn More</span>
        <AiOutlineArrowRight className='h-4 w-4' />
      </Link>
    </div>
  );
};

export default function PageLinks() {
  return (
    <section className='p-4'>
      <div className='grid gap-4lg:grid-cols-2 justify-center xl:grid-cols-4'>
        {Array(12)
          .fill(0)
          .map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <LinkItem key={index} />
          ))}
      </div>
    </section>
  );
}
