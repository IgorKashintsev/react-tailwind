import { FC, useEffect, useState } from 'react';
import { DataJson, DataObj } from '../../types';

interface RenderCountProps {
  countParam: string;
  data: DataJson | null;
}

export const RenderCount: FC<RenderCountProps> = ({ countParam, data }) => {
  const [filtredArr, setFiltredArr] = useState<DataObj[]>([]);

  useEffect(() => {
    if (data) {
      setFiltredArr(data.data.filter((item) => item.type === countParam));
    }
  }, [countParam, data]);

  return (
    <>
      <p className='mt-10 ml-10 text-3xl font-bold'>{filtredArr.length}</p>
    </>
  );
};
