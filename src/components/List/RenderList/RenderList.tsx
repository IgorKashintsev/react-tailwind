import { FC, useEffect, useState } from "react";
import { DataJson, DataObj } from "../../../types";
import { useParams } from "react-router-dom";

interface RenderListProps {
  data: DataJson | null;
}

export const RenderList: FC<RenderListProps> = ({data}) => {
  const { tabId } = useParams();
  const [filtredArr, setFiltredArr] = useState<DataObj[]>([]);

  const renderList = (filterParam: string) => {
    if (data) {
      setFiltredArr(data.data.filter((item) => item.type === filterParam));
    }
  };

  useEffect(() => {
    switch (tabId) {
      case '0': renderList('income'); break;
      case '1': renderList('outcome'); break;
      case '2': renderList('loan'); break;
      case '3': renderList('investment'); break;
    }; 
  }, [tabId, data]);
  
  return (
    <>
      <div>
        <p>Name</p>
        <ul>{filtredArr.map((item) => (
          <li key={item._id}>{item.name.first} {item.name.last}</li>
          ))}</ul>
      </div>
      <div>
        <p>Acount</p>
        <ul>{filtredArr.map((item) => (
          <li key={item._id}>{item.amount}</li>
          ))}</ul>
      </div>
    </>
  );
};