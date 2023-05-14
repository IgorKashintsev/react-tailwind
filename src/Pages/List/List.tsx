import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataJson } from '../../types';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { RenderList } from '../../components/RenderList/RenderList';

interface ListProps {
  data: DataJson | null;
}

export const List: FC<ListProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className='h-10'>
        <p
          className='max-w-max mx-auto mt-2 cursor-pointer'
          onClick={() => navigate(`/`)}
        >
          Back to Summary
        </p>
      </nav>
      <div className='rounded-lg border border-black'>
        <HeaderList />
        <RenderList data={data} />
      </div>
    </>
  );
};
