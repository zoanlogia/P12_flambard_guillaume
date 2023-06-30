import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { useUserData } from "@/hooks/useUserData";
import { setDateLetter } from "../../tools/setDateLetter.js";

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
    
      <LineChart data={averageSessions} height={400} width={400}>
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
          padding={{ left: 20, right: 20 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />
      </LineChart>
    
  );
};

export default RenderLineChart;
