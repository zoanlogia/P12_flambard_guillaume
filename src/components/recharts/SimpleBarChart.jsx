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
import PropTypes from "prop-types";

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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div
          style={{
            backgroundColor: "red",
            padding: "10px",
            lineHeight: "3",
          }}
          className="custom-tooltip"
        >
          <p style={{ color: "white" }} className="label">
            {`${payload[0].value}`} kg
          </p>
          <p style={{ color: "white" }} className="label">
            {`${payload[1].value}`} kcal
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="99%" aspect={3} height="100%">
      <BarChart
    data={dataGraph}
    margin={{
      top: 10,
      right: 0,
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
      yAxisId="left"
      allowDataOverflow={true}
      domain={["auto", "auto"]}
      orientation="right"
      dataKey={"weight"}
      axisLine={false}
      tickLine={false}
      stroke="#9B9EAC"
    />
    <YAxis
      yAxisId="right"
      allowDataOverflow={true}
      domain={["auto", "auto"]}
      orientation="right"
      axisLine={false}
      tickLine={false}
      stroke="#9B9EAC"
      hide={true} // hides this Y-axis but still allows bars to use its scale
    />
    <Tooltip content={<CustomTooltip />} />
    <Bar yAxisId="left" dataKey="weight" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
    <Bar yAxisId="right" dataKey="kcal" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
</BarChart>

    </ResponsiveContainer>
  );
};

SimpleChartBar.propTypes = {
  data: PropTypes.array,
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default SimpleChartBar;
