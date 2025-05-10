import { MdOutlineMenu } from 'react-icons/md';

export function Button() {
  return (
    <button
      type='button'
      className='cursor-pointer rounded-md bg-blue-500 px-5 py-2.5 font-bold text-md text-white hover:bg-blue-600'
    >
      Button
    </button>
  );
}

export function IconButton() {
  return (
    <button
      type='button'
      className='inline-flex cursor-pointer items-center rounded-md bg-blue-500 p-2.5 text-center font-bold text-md text-white hover:bg-blue-600'
      aria-label='ボタンの説明'
    >
      <MdOutlineMenu className='h-5 w-5' />
    </button>
  );
}
