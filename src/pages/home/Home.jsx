import "./Home.scss";
import Bars from "@/components/graphs/bars/bars";
import Loader from "@/components/loader/Loader";
import Lines from "@/components/graphs/Lines/Lines";
import { useUserData } from "@/hooks/useUserData";
import Radial from "@/components/graphs/radials/radial";
import Score from "@/components/graphs/radials/Score";
import CardSmIcon from "../../components/cards/CardSmIcon.jsx";

import calories from "../../assets/img/calories-icon.svg";
import protein from "../../assets/img/protein-icon.svg";
import carbs from "../../assets/img/carbs-icon.svg";
import fat from "../../assets/img/fat-icon.svg";

const Home = () => {
  const { userData, error } = useUserData();

  // Handle errors in the useUserData hook
  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <Loader />;
  }

  return (
    <section id="home" className="home">
      <div className="home__wrapper__intro">
        <h1>
          Bonjour{" "}
          <span
            id={`user_${userData.userMainData.id}`}
          >{`${userData.userMainData.firstName} ${userData.userMainData.lastName}`}</span>
        </h1>

        <p className="home__intro__desc">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="home__wrapper">
        <div className="home__section">
          <div className="home__stats">
            <div className="home__stats__card">
              <Bars />
            </div>
            <div className="graphs__container">
              <Lines />
              <Radial />
              <Score />
            </div>
          </div>
        </div>
        <div className="cards__container">
          <CardSmIcon  content={"Calories"} icon={calories} category={'calorie'} />
          <CardSmIcon  content={"Proteines"} icon={protein} category={'protein'}/>
          <CardSmIcon  content={"Glucides"} icon={carbs} category={'carbohydrate'}/>
          <CardSmIcon  content={"Lipides"} icon={fat} category={'lipid'}/>
        </div>
      </div>
    </section>
  );
};

export default Home;
