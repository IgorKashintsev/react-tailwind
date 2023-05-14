import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RenderCount } from "./RenderCount/RenderCount";
import { DataJson } from "../../types";

interface SummaryProps {
  data: DataJson | null;
}

export const Summary: FC<SummaryProps> = ({data}) => {
  const navigate = useNavigate();
  
  const handleClick = (url: string) => {
    navigate(`/navigator/${url}`)
  };

  return (
    <div>
      <div>
        <h2>Welcome</h2>
        <p>With supporting text below as a natural lead-in to additional content.</p>
        <button type="button">See transactions</button>
        <p>You have {data?.total} transactions</p>
      </div>
      <div>
        <RenderCount countParam={'income'} data={data} />
        <span>Income</span>
        <button type="button" onClick={() => handleClick('0')}>See all</button>
      </div>
      <div>
        <RenderCount countParam={'outcome'} data={data} />
        <span>Outcome</span>
        <button type="button" onClick={() => handleClick('1')}>See all</button>
      </div>
      <div>
        <RenderCount countParam={'loan'} data={data} />
        <span>Loans</span>
        <button type="button" onClick={() => handleClick('2')}>See all</button>
      </div>
      <div>
        <RenderCount countParam={'investment'} data={data} />
        <span>Investments</span>
        <button type="button" onClick={() => handleClick('3')}>See all</button>
      </div>
    </div>
  );
};