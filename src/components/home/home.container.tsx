import { FunctionComponent, useEffect, useState } from 'react';
import { API } from '../../common/api';
import { Home as HomeComponent } from './home';

export const Home: FunctionComponent = () => {
  const [prefectures, setPreFectures] = useState<
    { prefCode: number; prefName: string }[] | null
  >(null);

  const [population, setPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);

  useEffect(() => {
    // fetch prefectures list
    API.getPrefectures()
      .then((res) => {
        setPreFectures(res.data.result);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    const checkedPopulation = population.slice();

    // when checked
    if (check) {
      if (
        checkedPopulation.findIndex((value) => value.prefName === prefName) !==
        -1
      )
        return;

      API.getPopulations(prefCode)
        .then((res) => {
          checkedPopulation.push({
            prefName: prefName,
            data: res.data.result.data[0].data
          });
          setPopulation(checkedPopulation);
        })
        .catch((error) => console.error(error));
    }
    // when unchecked
    else {
      const deleteIndex = checkedPopulation.findIndex(
        (value) => value.prefName === prefName
      );
      if (deleteIndex === -1) return;
      checkedPopulation.splice(deleteIndex, 1);
      setPopulation(checkedPopulation);
    }
  };

  return (
    <HomeComponent
      prefectures={prefectures}
      population={population}
      onChange={handleClickCheck}
    />
  );
};
