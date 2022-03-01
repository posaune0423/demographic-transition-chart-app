import axios from 'axios';

const baseUrl = 'https://opendata.resas-portal.go.jp/api';
const apiKey = process.env.NEXT_PUBLIC_API_KEY!;

export class API {
  static getPrefectures = async (): Promise<{
    data: { result: { prefCode: number; prefName: string }[] | null };
  }> => {
    return axios.get(baseUrl + '/v1/prefectures', {
      headers: { 'X-API-KEY': apiKey }
    });
  };

  static getPopulations = async (
    prefCode: number
  ): Promise<{
    data: {
      result: { data: [{ data: { year: number; value: number }[] }] };
    };
  }> => {
    return axios.get(
      baseUrl +
        '/v1/population/composition/perYear?prefCode=' +
        String(prefCode),
      { headers: { 'X-API-KEY': apiKey } }
    );
  };
}
