import { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { Home as HomeComponent } from './home';

export const Home: FunctionComponent = () => {
  const [prefectures, setPreFectures] = useState<
    { prefCode: number; prefName: string }[] | null
  >(null);

  useEffect(() => {
    // fetch prefectures list
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY! }
      })
      .then((res) => {
        setPreFectures(res.data.result);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClickCheck = () => {
    // TODO: need to implement!
    console.log('handle click check');
  };

  return (
    <HomeComponent prefectures={prefectures} onChange={handleClickCheck} />
  );
};
