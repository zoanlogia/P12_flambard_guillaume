import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { useUserData } from "@/hooks/useUserData";
import { useEffect, useState } from "react";

const SimpleRadarChart = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    if (userData) {
      const userPerformance = userData.userPerformance.data;
      const legend = userData.userPerformance.kind;
      
      const dataGraph = userPerformance?.map((session) => ({
        subject: legend[session.kind],
        A: session.value,
      }));

      console.log(userData.userPerformance);

      setPerformance(dataGraph);
    }
  }, [userData]);
  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <RadarChart
        width={400}
        height={400}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performance}
      >
        <PolarGrid radialLines={false} stroke="#fff" strokeWidth={1.5} />
        <PolarAngleAxis stroke="#fff" strokeWidth={1.5} dataKey="subject" />
        <Radar
          dataKey="A"
          fill="rgba(255, 1, 1, 0.70)"
          fillOpacity={0.8}
        />
      </RadarChart>
    </div>
  );
};

export default SimpleRadarChart;
