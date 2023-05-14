import { FC } from 'react';
import { DataJson } from '../../types';

interface HeaderSummaryProps {
  data: DataJson | null;
}

export const HeaderSummary: FC<HeaderSummaryProps> = ({ data }) => {
  return (
    <div className='border border-t-0 border-gray-400 mb-8'>
      <div className='h-16 bg-gray-100'></div>
      <div className='border-t border-b border-gray-400 h-56'>
        <h2 className='-ml-52 mt-9 text-3xl font-bold text-center'>Welcome</h2>
        <p className='mt-4 text-xl text-center'>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div className='max-w-max mx-auto mt-6'>
          <button
            className='w-56 h-11 rounded-md bg-sky-600 text-white text-xl font-medium'
            type='button'
          >
            See transactions
          </button>
        </div>
      </div>
      <p className='h-16 pt-3 bg-gray-100 text-center text-2xl'>
        You have {data?.total} transactions
      </p>
    </div>
  );
};
