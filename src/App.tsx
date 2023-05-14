import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataJson } from './types';
import { Summary } from './Pages/Summary/Summary';
import { List } from './Pages/List/List';

export const App = () => {
  const [data, setData] = useState<DataJson | null>(null);

  useEffect(() => {
    setData(require('./data.json'));
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Summary data={data} />} />
        <Route path='/navigator/:tabId' element={<List data={data} />} />
      </Routes>
    </div>
  );
};
