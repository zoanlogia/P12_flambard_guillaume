import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useUserData } from "@/hooks/useUserData";

const RenderLineChart = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);

  // handle error
  if (error) {
    return <div>{error}</div>;
  }

  const userActivity = userData?.userActivity;

  const dataGraph = userActivity?.sessions.map((session) => ({
    name: session.day,
    uv: session.calories,
    pv: session.kilogram,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={dataGraph}>
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
    </ResponsiveContainer>
  );
};

export default RenderLineChart;
