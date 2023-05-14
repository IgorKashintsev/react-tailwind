import { FC } from 'react';
import { DataJson } from '../../types';
import { RenderCount } from '../../components/RenderCount/RenderCount';
import { ButtonSummary } from '../../components/ButtonSummary/ButtonSummary';
import { HeaderSummary } from '../../components/HeaderSummary/HeaderSummary';

interface SummaryProps {
  data: DataJson | null;
}

export const Summary: FC<SummaryProps> = ({ data }) => {
  return (
    <>
      <div className='px-5'>
        <HeaderSummary data={data} />
        <div className='grid sm:grid-cols-2 gap-8 sm:grid-rows-summary grid-rows-summary640'>
          <div className='rounded-md border border-gray-400'>
            <RenderCount countParam={'income'} data={data} />
            <p className='mt-10 ml-10 text-xl'>Income</p>
            <ButtonSummary tabId={'0'} />
          </div>
          <div className='rounded-md border border-gray-400'>
            <RenderCount countParam={'investment'} data={data} />
            <p className='mt-10 ml-10 text-xl'>Investments</p>
            <ButtonSummary tabId={'3'} />
          </div>
          <div className='rounded-md border border-gray-400'>
            <RenderCount countParam={'outcome'} data={data} />
            <p className='mt-10 ml-10 text-xl'>Outcome</p>
            <ButtonSummary tabId={'1'} />
          </div>
          <div className='rounded-md border border-gray-400'>
            <RenderCount countParam={'loan'} data={data} />
            <p className='mt-10 ml-10 text-xl'>Loans</p>
            <ButtonSummary tabId={'2'} />
          </div>
        </div>
      </div>
      <hr className='border-t-2 border-gray-400 shadow-[0_-10px_26px_1px_rgba(0,0,0,0.5)]'></hr>
    </>
  );
};
