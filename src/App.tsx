import { Route, Routes } from "react-router-dom";
import { Summary } from "./components/Summary/Summary";
import { List } from "./components/List/List";
import { useEffect, useState } from "react";
import { DataJson } from "./types";


export const App = () => {
  const [data, setData] = useState<DataJson | null>(null);

  useEffect(() => {
    setData(require('./data.json'));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Summary data={data} />} />
        <Route path="/navigator/:tabId" element={<List data={data} />} />
      </Routes>
    </>
  );
}
