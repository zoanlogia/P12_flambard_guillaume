import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Home.scss";
import ApiService from "@/services/apiServices.jsx";
import Bars from "@/components/graphs/bars.jsx";

import { User } from '@/models/userData.jsx'; // Assuming you have exported your models from a file named Models.js
import Loader from "@/components/loader/Loader.jsx";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.getUserData(userId);
        const rawData = data; // since we have already processed the data in ApiService, no need to index at user[0]


        const user = new User(rawData.id, rawData.name);
        setUserData(user);

      } catch (error) {
        
        setError("no user found");
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <Loader />;
  }

  return (
    <section id="home" className="home">
      <div className="home__intro">
        <h1>
          Bonjour <span id={`user_${userData.id}`}>{userData.name}</span>
        </h1>
    
        <p className="home__intro__desc">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="home__stats">
        <div className="home__stats__card">
          <Bars />
        </div>
      </div>
    </section>
  );
};

export default Home;
