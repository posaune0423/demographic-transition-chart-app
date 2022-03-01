import axios from 'axios';

const baseUrl = 'https://opendata.resas-portal.go.jp/api';
const apiKey = process.env.NEXT_PUBLIC_API_KEY!;

export class API {
  static getPrefectures = async () => {
    return axios.get(baseUrl + '/v1/prefectures', {
      headers: { 'X-API-KEY': apiKey }
    });
  };

  static getPopulations = async (prefCode: number) => {
    return axios.get(
      baseUrl +
        '/v1/population/composition/perYear?prefCode=' +
        String(prefCode),
      { headers: { 'X-API-KEY': apiKey } }
    );
  };
}
