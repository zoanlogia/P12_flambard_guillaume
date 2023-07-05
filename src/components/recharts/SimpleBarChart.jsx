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
import {setDateLetter} from "@/tools/setDateLetter.js";

const SimpleChartBar = () => {
  const { userId } = useParams();
  const { userData, error } = useUserData(userId);

  // handle error
  if (error) {
    return <div>{error}</div>;
  }

  const userActivity = userData?.userActivity;

  const dataGraph = userActivity?.sessions.map((session) => ({
    name: setDateLetter(session.day) , // assuming day is a property in session
    kcal: session.calories, // assuming caloriesBurned is a property in session
    weight: session.kilogram, // assuming weight is a property in session
  }));

  return (
    <ResponsiveContainer className={"flex-child"} width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={dataGraph}
        margin={{
          top: 5,
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
          orientation="right"
          dataKey={"kcal"}
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
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
