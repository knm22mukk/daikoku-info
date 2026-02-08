import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSQueries,
} from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('microcmsのサービスドメインは必須です');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('microcmsのAPIキーは必須です');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// エンドポイントの定義（オブジェクト形式 - 推奨）
export const CONTENT_TYPES = {
  rakuraku: {
    endpoint: 'rakuraku',
    name: '楽楽精算',
    description: '楽楽精算の作業手順や注意事項についての記事一覧',
  },
  aiseminer: {
    endpoint: 'aiseminer',
    name: 'AI勉強会',
    description: 'AIの勉強会で使用した資料や情報共有の記事一覧',
  },
  later: {
    endpoint: 'later',
    name: '未定',
    description: '未定のコンテンツ',
  },
} as const;

export type ContentType = keyof typeof CONTENT_TYPES;

// 有効なコンテンツタイプかチェック
export const isValidContentType = (type: string): type is ContentType => {
  return Object.prototype.hasOwnProperty.call(CONTENT_TYPES, type);
};

// 配列形式も提供（一覧表示などで便利）
export const CONTENT_TYPES_ARRAY = Object.entries(CONTENT_TYPES).map(
  ([key, value]) => ({
    key,
    ...value,
  }),
);

export type Tutorial = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  body: string;
} & MicroCMSContentId &
  MicroCMSDate;

//tutorial記事の一覧を取得
export const getTutorialList = async (
  endpoint: string,
  queries?: MicroCMSQueries,
) => {
  const listData = await client.getList<Tutorial>({
    endpoint,
    queries,
  });
  return listData;
};

//tutorial記事の詳細記事を取得
export const getTutorialDetail = async (
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Tutorial>({
    endpoint,
    contentId,
    queries,
  });
  return detailData;
};
