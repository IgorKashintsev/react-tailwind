import { FC, useEffect, useState } from "react";
import { DataJson, DataObj } from "../../../types";

interface RenderCountProps {
  countParam: string;
  data: DataJson | null;
}

export const RenderCount: FC<RenderCountProps> = ({countParam, data}) => {
  const [filtredArr, setFiltredArr] = useState<DataObj[]>([]);
  
  useEffect(() => {
    if (data) {
      setFiltredArr(data.data.filter((item) => item.type === countParam));
    }
  }, [countParam, data]);
  
  return (
    <>
      <p>{filtredArr.length}</p>
    </>
  );
};