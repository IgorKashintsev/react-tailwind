import { Header } from "./Header/Header";
import { FC } from "react";
import { RenderList } from "./RenderList/RenderList";
import { NavLink } from "react-router-dom";
import { DataJson } from "../../types";

interface ListProps {
  data: DataJson | null;
}

export const List: FC<ListProps> = ({data}) => {
  
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <Header />
      <RenderList data={data} />
    </>
  );
};