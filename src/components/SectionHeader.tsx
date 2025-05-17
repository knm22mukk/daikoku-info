type Props = {
  subHead: string;
  title: string;
  description: string;
};

export default function SectionHeader({ subHead, title, description }: Props) {
  return (
    <div className='py-6 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <p className='mb-2 font-bold text-blue-600 md:mb-3 lg:text-lg'>
          {subHead}
        </p>

        <h2 className='mb-4 font-bold text-2xl text-gray-900 md:mb-6 lg:text-3xl'>
          {title}
        </h2>

        <p className='max-w-screen-md text-gray-500 md:text-lg'>
          {description}
        </p>
      </div>
    </div>
  );
}
