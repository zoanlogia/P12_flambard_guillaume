import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiServices from "@/services/apiServices";
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "@/models/userData";

export function useUserData() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainData = await apiServices.getUserMainData(userId);
        const activityData = await apiServices.getUserActivity(userId);
        const averageSessionsData = await apiServices.getUserAverageSessions(
          userId
        );
        const performanceData = await apiServices.getUserPerformance(userId);

        // Création des objets de modèle à partir des données récupérées
        const userMainData = new UserMainData(
          mainData.data.id,
          mainData.data.userInfos.firstName,
          mainData.data.userInfos.lastName,
          mainData.data.userInfos.age,
          mainData.data.todayScore || mainData.score,
          mainData.data.keyData
        );

        const userActivity = new UserActivity(
          activityData.data.userId,
          activityData.data.sessions
        );
        const userAverageSessions = new UserAverageSessions(
          averageSessionsData.data.userId,
          averageSessionsData.data.sessions
        );
        const userPerformance = new UserPerformance(
          performanceData.data.userId,
          performanceData.data.kind,
          performanceData.data.data
        );

        // Regroupement de toutes les données de l'utilisateur dans un seul objet
        const userData = {
          userMainData,
          userActivity,
          userAverageSessions,
          userPerformance,
        };

        setUserData(userData);
      } catch (error) {
        console.error("Une erreur est survenue", error);
        setError("Aucun utilisateur trouvé");
      }
    };
    fetchData();
  }, [userId]);

  return {userData, error};
}
