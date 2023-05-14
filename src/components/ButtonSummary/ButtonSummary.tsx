import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonSummaryProps {
  tabId: string;
}

export const ButtonSummary: FC<ButtonSummaryProps> = ({ tabId }) => {
  const navigate = useNavigate();

  return (
    <button
      className='float-right mt-6 sm:mr-10 mr-3 w-56 h-11 rounded-md bg-sky-600 text-white text-xl font-medium'
      type='button'
      onClick={() => navigate(`/navigator/${tabId}`)}
    >
      See all
    </button>
  );
};
