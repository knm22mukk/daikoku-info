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

export type Info = {
  title: string;
  description: string;
  body: string;
  category: Category;
} & MicroCMSContentId &
  MicroCMSDate;

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

//Infomation記事の一覧を取得
export const getInfoList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Info>({
    endpoint: 'informations',
    queries,
  });
  return listData;
};

//Infomation記事の詳細記事を取得
export const getInfoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Info>({
    endpoint: 'informations',
    contentId,
    queries,
  });
  return detailData;
};

//カテゴリーを取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });
  return detailData;
};
