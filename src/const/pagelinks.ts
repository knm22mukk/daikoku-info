import { AiFillInfoCircle } from 'react-icons/ai';
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
    logo: AiFillInfoCircle,
    path: '/',
    title: 'ComingSoon1',
    description: 'まだ準備中です。',
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
