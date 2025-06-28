'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisiblity = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener('scroll', toggleVisiblity);
    return () => {
      window.removeEventListener('scroll', toggleVisiblity);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 ${isVisible ? 'block' : 'hidden'}`}
    >
      <button
        type='button'
        onClick={scrollTop}
        className='bg-blue-600 text-white p-3 rounded-full cursor-pointer'
      >
        <FaArrowUp className='w-10 h-10' />
      </button>
    </div>
  );
}
