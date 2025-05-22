import { AiFillInfoCircle } from 'react-icons/ai';
import { GrSystem } from 'react-icons/gr';
import type { IconType } from 'react-icons/lib';
import { MdOutlineTrain } from 'react-icons/md';

type PageLink = {
  logo: IconType;
  path: string;
  title: string;
  description: string;
};

export const pageLinks: PageLink[] = [
  {
    logo: MdOutlineTrain,
    path: '/tutorial/rakuraku',
    title: '楽楽精算',
    description:
      '楽楽精算のチュートリアルへのリンクです。楽楽精算の各種作業手順や期間限定のお願い事項、社内規定なども一部掲載しています。このリンクは楽楽精算のページにもおくようにしています。',
  },
  {
    logo: GrSystem,
    path: '/tutorial/cotesystem',
    title: '基幹業務',
    description:
      '基幹業務のチュートリアルへのリンクです。受注入力や売り上げデータの取得など営業や営業事務として活用できるものを一からご説明します。',
  },
  {
    logo: AiFillInfoCircle,
    path: '/',
    title: 'ComingSoon2',
    description: 'まだ準備中です。',
  },
  {
    logo: AiFillInfoCircle,
    path: '/',
    title: 'ComingSoon3',
    description: 'まだ準備中です。',
  },
  {
    logo: AiFillInfoCircle,
    path: '/',
    title: 'ComingSoon4',
    description: 'まだ準備中です。',
  },
];
