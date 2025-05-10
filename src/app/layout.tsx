import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '大黒info',
  description: '大黒工業株式会社の社内規定や作業手順などを説明するサイトです',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
