import { useEffect, useState } from "react";
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
import apiServices from "@/services/apiServices.jsx";
import { User } from "@/models/userData.jsx";

const SimpleChartBar = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiServices.getUserData(userId);
        const user = data; // since we have already processed the data in ApiService, no need to index at user[0]
        // créer une nouvelle instance de User avec toutes les propriétés nécessaires
        const userData = new User(
          user.id,
          user.name,
          user.dailyActivity,
          user.averageSessionDuration,
          user.score,
          user.performance,
          user.nutrition
        );
        setUserData(userData);
      } catch (error) {
        console.log("an error occured");
      }
    };
    fetchData();
  }, [userId]);

  const dailyActivity = userData?.dailyActivity.days;

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
        <YAxis orientation="right" dataKey={"kcal"} />
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
