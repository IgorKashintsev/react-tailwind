import { FC, useEffect, useState } from 'react';
import { DataJson, DataObj } from '../../types';
import { useParams } from 'react-router-dom';

interface RenderListProps {
  data: DataJson | null;
}

export const RenderList: FC<RenderListProps> = ({ data }) => {
  const { tabId } = useParams();
  const [filtredArr, setFiltredArr] = useState<DataObj[]>([]);

  const renderList = (filterParam: string) => {
    if (data) {
      setFiltredArr(data.data.filter((item) => item.type === filterParam));
    }
  };

  useEffect(() => {
    switch (tabId) {
      case '0':
        renderList('income');
        break;
      case '1':
        renderList('outcome');
        break;
      case '2':
        renderList('loan');
        break;
      case '3':
        renderList('investment');
        break;
    }
  }, [tabId, data]);

  return (
    <div className='flex justify-center my-11'>
      <div className='w-full pl-5'>
        <p className='text-center font-medium'>Name</p>
        <ul>
          {filtredArr.map((item) => (
            <div key={item._id}>
              <hr className='border-gray-300'></hr>
              <li className='text-center sm:text-base text-sm'>
                {item.name.first} {item.name.last}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className='w-full pr-5'>
        <p className='text-center font-medium'>Acount</p>
        <ul>
          {filtredArr.map((item) => (
            <div key={item._id}>
              <hr className='border-gray-300'></hr>
              <li className='text-center sm:text-base text-sm'>
                {item.amount}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
