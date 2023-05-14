import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();
  
  const handleClick = (url: string) => {
    navigate(`/navigator/${url}`)
  };
  
  return (
    <nav>
      <div onClick={() => handleClick('0')}>Income</div>
      <div onClick={() => handleClick('1')}>Outcome</div>
      <div onClick={() => handleClick('2')}>Loans</div>
      <div onClick={() => handleClick('3')}>Investments</div>
    </nav>
  );
};