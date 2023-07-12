import SimpleRadialBarChart from "../../recharts/SimpleRadialBarChart.jsx";
import "./Score.scss";

const Score = () => {
  return (
    
      <div id="score" className="score">
        <h2>Score</h2>
        <div className="score__wrapper">
          <SimpleRadialBarChart />
        </div>
      </div>
    
  );
};

export default Score;
