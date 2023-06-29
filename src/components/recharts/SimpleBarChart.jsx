import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import apiServices from "@/services/apiServices.jsx";
// import PropTypes from "prop-types";

const SimpleChartBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiServices.getUserData();
        setUserData(data);
      } catch (error) {
        console.log("an error occured");
      }
    };

    fetchData();
  }, []);

  const dailyActivity = userData?.user?.[0]?.dailyActivity?.days;

  const dataGraph = dailyActivity?.map((day) => ({
    name: day.day,
    kcal: day.caloriesBurned,
    weight: day.weight,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <XAxis dataKey="name" />
        <YAxis orientation="right" dataKey={"kcal"}/>
        <Tooltip />

        <Bar
          dataKey="weight"
          fill="#282D30;"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar dataKey="kcal" fill="#E60000"
        barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

// SimpleChartBar.propTypes = {
// //   id: PropTypes.number,
// };

export default SimpleChartBar;
