import "./Home.scss";
import Bars from "@/components/graphs/bars/bars";
import Loader from "@/components/loader/Loader";
import Lines from "@/components/graphs/Lines/Lines";
import { useUserData } from "@/hooks/useUserData";

const Home = () => {
  
  const {userData, error} = useUserData();

  // Handle errors in the useUserData hook
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
          Bonjour <span id={`user_${userData.userMainData.id}`}>{`${userData.userMainData.firstName} ${userData.userMainData.lastName}`}</span>
        </h1>
    
        <p className="home__intro__desc">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="home__stats">
        <div className="home__stats__card">
          <Bars />
        </div>
        <div>
          <Lines />
        </div>
      </div>
    </section>
  );
};

export default Home;
