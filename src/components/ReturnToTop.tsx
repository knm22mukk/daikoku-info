'use client';
import { useCallback, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisiblity = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisiblity);
    return () => {
      window.removeEventListener('scroll', toggleVisiblity);
    };
  }, [toggleVisiblity]);

  return (
    <div
      className={`fixed right-10 bottom-10 ${isVisible ? 'block' : 'hidden'}`}
    >
      <button
        type='button'
        onClick={scrollTop}
        className='cursor-pointer rounded-full bg-blue-600 p-3 text-white'
      >
        <FaArrowUp className='h-10 w-10' />
      </button>
    </div>
  );
}
