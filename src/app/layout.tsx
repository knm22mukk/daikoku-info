import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '大黒tutorial',
  description:
    '大黒の社内規定や作業手順マニュアルを掲載する社内向けのサイトです。',
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='mx-auto max-w-screen-xl'>{children}</body>
    </html>
  );
}
