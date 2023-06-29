import { useEffect, useState } from "react";
import "./Home.scss";
// import PropTypes from "prop-types";
import ApiService from "@/services/apiServices.jsx";
import Bars from "@/components/graphs/bars.jsx";

/**
 * The `Home` component is a functional component in JavaScript React that fetches user data from an
 * API based on the `id` prop and displays a greeting message with the user's name.
 * @returns The component is returning a section with the id "home" and the class "home". Inside the
 * section, there is a div with the class "home__intro" containing an h1 element and a p element. The
 * h1 element displays a greeting message with the user's name, which is obtained from the userData
 * object. The p element displays a congratulatory message.
 */
const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is used to fetch user data from an API when the `id` prop changes. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.getUserData();

        setUserData(data);
      } catch (error) {
        setError("an error occured");

        console.error(error);
        // Gérer l'erreur comme vous le souhaitez, peut-être mettre à jour l'état avec un message d'erreur
      }
    };

    fetchData();
  }, []);

  const user = userData?.user?.[0];

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section id="home" className="home">
      <div className="home__intro">
        <h1>
          Bonjour <span id={`user_${user.id}`}>{user.name}</span>
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

// Home.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Home;
