import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const HeaderList: FC = () => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const locationHash = useLocation();

  const handleClick = (url: string) => {
    navigate(`/navigator/${url}`);
  };

  useEffect(() => {
    const pathnames = locationHash.pathname.split('/').filter((x) => x);
    setActive(pathnames[pathnames.length - 1]);
  }, [locationHash]);

  return (
    <>
      <nav className='flex items-center font-medium mt-1'>
        <div
          className={`${'border border-b-0 border-black rounded-t-lg flex-1 text-center cursor-pointer py-2'}
          ${active === '0' ? 'bg-gray-300' : ''}`}
          onClick={() => handleClick('0')}
        >
          Income
        </div>
        <div
          className={`${'border border-b-0 border-black rounded-t-lg flex-1 text-center cursor-pointer py-2'}
          ${active === '1' ? 'bg-gray-300' : ''}`}
          onClick={() => handleClick('1')}
        >
          Outcome
        </div>
        <div
          className={`${'border border-b-0 border-black rounded-t-lg flex-1 text-center cursor-pointer py-2'}
          ${active === '2' ? 'bg-gray-300' : ''}`}
          onClick={() => handleClick('2')}
        >
          Loans
        </div>
        <div
          className={`${'border border-b-0 border-black rounded-t-lg flex-1 text-center cursor-pointer py-2'}
          ${active === '3' ? 'bg-gray-300' : ''}`}
          onClick={() => handleClick('3')}
        >
          Investments
        </div>
      </nav>
      <hr></hr>
    </>
  );
};
