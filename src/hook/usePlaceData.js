import { useEffect, useState } from 'react';
import { getPlaceList } from '../api/placeList';
import { useQuery } from 'react-query';
const { kakao } = window;

const usePlaceData = (list, area, category) => {
  const [dataList, setDataList] = useState([]);

  const filterTour = (data) => {
    const a = data.filter((item) => {
      if (category === '관광지') {
        return item.category === 'tourSpot';
      } else if (category === '카페') {
        return item.category === 'cafe';
      } else if (category === '식당') {
        return item.category === 'restaurant';
      } else {
        return item;
      }
    });
    return a;
  };

  useEffect(() => {
    const andeok = list?.filter((item) => {
      return item.areaid === 'Andeok';
    });
    const jocheon = list?.filter((item) => {
      return item.areaid === 'Jocheon';
    });
    const aewol = list?.filter((item) => {
      return item.areaid === 'Aewol';
    });
    if (area === '조천') {
      setDataList(filterTour(jocheon));
    } else if (area === '애월') {
      setDataList(filterTour(aewol));
    } else if (area === '안덕') {
      setDataList(filterTour(andeok));
    } else {
      setDataList(filterTour(list));
    }
  }, [area, category]);
  return [dataList];
};

export default usePlaceData;
