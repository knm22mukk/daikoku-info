type Props = {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({ type, children, onClick }: Props) {
  return (
    <button
      type={type}
      className='cursor-pointer rounded-md bg-blue-500 px-5 py-2.5 font-bold text-md text-white hover:bg-blue-600'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function IconButton({ type, children, ariaLabel }: Props) {
  return (
    <button
      type={type}
      className='inline-flex cursor-pointer items-center rounded-md bg-blue-500 p-2.5 text-center font-bold text-md text-white hover:bg-blue-600'
      aria-label={ariaLabel || 'ボタン'}
    >
      {children}
    </button>
  );
}
