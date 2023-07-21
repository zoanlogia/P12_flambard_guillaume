import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { useUserData } from "../../hooks/useUserData.jsx";
import { useParams } from "react-router-dom";

const SimpleRadialBarChart = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);
  const [todayScore, setTodayScore] = useState([]);
  const [displayScore, setDisplayScore] = useState(0);  // new state for display score

  useEffect(() => {
    if (userData) {
      const userScore = userData?.userMainData?.todayScore * 100  // 
      setDisplayScore(userScore.toFixed(2));  // update display score
      const dataGraph = [
        {
          uv: userScore,
          fill: "red",
        },
      ];
      setTodayScore(dataGraph);
    }
  }, [userData]);

  // handle error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="badge-container">
      <RadialBarChart
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        barSize={10}
        startAngle={90}
        endAngle={-270}
        data={todayScore}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          minAngle={15}
          angleAxisId={0}
          cornerRadius={10} // Adjust as needed for desired corner rounding
          clockWise={true}
          dataKey="uv"
        />
      </RadialBarChart>
      <div className="circle">
        <div className="circle__wrapper">
          <h3 className="result">{Math.round(displayScore)}%</h3> {/* display score here */}
          <p>de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleRadialBarChart;
