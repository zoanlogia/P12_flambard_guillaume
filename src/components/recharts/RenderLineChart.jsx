import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { useUserData } from "@/hooks/useUserData";
import { setDateLetter } from "@/tools/setDateLetter";

const RenderLineChart = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);
  const [averageSessions, setAverageSessions] = useState([]);

  useEffect(() => {
    if (userData) {
      const userSessions = userData.userAverageSessions.sessions;

      // Format the data for the graph
      const dataGraph = userSessions?.map((session) => ({
        name: setDateLetter(session.day),
        uv: session.sessionLength,
      }));

      setAverageSessions(dataGraph);
      
    }
  }, [userData]);

  // handle error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    
    <LineChart data={averageSessions} width={400} height={300}>
      <Line
        strokeWidth={"3px"}
        dot={false}
        type="monotone"
        style={{
          opacity: 0.5,
        }}
        dataKey="uv"
        stroke="#fff"
      />

      <XAxis
        dataKey="name"
        stroke="#fff"
        tick={true}
        opacity={0.5}
        padding={{ left: 10, right: 10 }}
        axisLine={false}
        tickLine={false}
      />

      <Tooltip />
    </LineChart>
    
  );
};

export default RenderLineChart;
