export default function SectionHeader() {
  return (
    <div className='py-6 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <p className='mb-2 font-bold text-blue-600 md:mb-3 lg:text-lg'>
          Information
        </p>

        <h2 className='mb-4 font-bold text-2xl text-gray-900 md:mb-6 lg:text-3xl'>
          楽楽精算の作業手順
        </h2>

        <p className='max-w-screen-md text-gray-500 md:text-lg'>
          楽楽精算の作業手順や、社内規定についての説明です。順序を追って進められるようにしていますので、作業手順に悩んだ際には項目を選択して確認をしてください。
        </p>
      </div>
    </div>
  );
}
