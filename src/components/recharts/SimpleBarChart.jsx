import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUserData } from "@/hooks/useUserData";

const SimpleChartBar = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);

  // handle error
  if (error) {
    return <div>{error}</div>;
  }

  const userActivity = userData?.userActivity;

  const dataGraph = userActivity?.sessions.map((session, index) => ({
    name: index + 1,

    // assuming day is a property in session
    kcal: session.calories, // assuming caloriesBurned is a property in session
    weight: session.kilogram, // assuming weight is a property in session
  }));

  return (
    <ResponsiveContainer className={"flex-child"} width="100%" height="100%">
      <BarChart
        data={dataGraph}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray={`5`} vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
          tickMargin={15}
        />
        <YAxis
          allowDataOverflow={true}
          domain={"dataMin"}
          orientation="right"
          dataKey={"weight"}
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
          interval={1}
        />
        <Tooltip />

        <Bar
          dataKey="weight"
          fill="#282D30"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="kcal"
          fill="#E60000"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleChartBar;
