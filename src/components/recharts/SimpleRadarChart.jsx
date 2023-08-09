/* The code you provided is a React component called `SimpleRadarChart`. It imports several modules and
hooks from external libraries. */
/**
 * The SimpleRadarChart component renders a radar chart with data from the user's performance.
 * @returns The SimpleRadarChart component is returning a JSX element.
 * @see https://recharts.org/en-US/examples/SimpleRadarChart
 *
 */

import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
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

      setPerformance(dataGraph);
    }
  }, [userData]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ResponsiveContainer width={300} height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={performance}>
          <PolarGrid radialLines={false} stroke="#fff" strokeWidth={1.5} />
          <PolarAngleAxis
            tick={{ fontSize: 15 }}
            stroke="#fff"
            strokeWidth={1.5}
            dataKey="subject"
          />
          <Radar dataKey="A" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleRadarChart;
