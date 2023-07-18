import { useEffect, useState } from 'react';
import { getPlaceList } from '../api/placeList';
import { useQuery } from 'react-query';
const { kakao } = window;

const usePlaceData = (number) => {
  //   const { data, isLoding, isError } = useQuery('placeList', getPlaceList);
  const [data, setData] = useState('');
  // const [data, setData] = useState('');

  const geocoder = new kakao.maps.services.Geocoder();
  const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
      return result;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlaceList();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        geocoder.addressSearch(item.address, callback);
      });
    }
  }, [data]);

  const a = 0;
  return [a];
};

export default usePlaceData;
