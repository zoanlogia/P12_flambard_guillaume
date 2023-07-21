import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { useUserData } from "@/hooks/useUserData";
import { setDateLetter } from "@/tools/setDateLetter";
import PropTypes from 'prop-types';

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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
          }}
          className="custom-tooltip"
        >
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LineChart data={averageSessions} width={300} height={200}>
      <Line
        strokeWidth={"px"}
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

      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
};

RenderLineChart.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
};

export default RenderLineChart;
