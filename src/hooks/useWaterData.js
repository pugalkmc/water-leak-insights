import { useContext } from 'react';
import { WaterDataContext } from '../context/WaterDataContext'; // Replace with the correct path to your WaterDataContext

const useWaterData = () => {
  const { waterData, updateWaterData } = useContext(WaterDataContext);

  return {
    waterData,
    updateWaterData,
  };
};

export default useWaterData;
