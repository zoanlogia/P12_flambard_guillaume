import { useEffect, useState } from 'react';
import { useUserData } from '../../hooks/useUserData.jsx';
import './CardSmIcon.scss'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardSmIcon = ({ icon, content, category }) => {

    const { userId } = useParams();
    const { userData, error } = useUserData(userId);
    const [stats, setStats] = useState(0);

    useEffect(() => {
        if (userData) {
            const userStats = userData?.userMainData?.keyData;
            // console.log(userStats);
            const statsCategory = userStats[`${category}Count`];
            console.log(statsCategory); // this will select the right property based on the category
            if (statsCategory) {
                setStats(statsCategory);
            }
        }
      }, [userData, category]); // added category and userData in the dependencies array
      
      if (error) {
        return <div>{error}</div>;
      }

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__wrapper__icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="card__wrapper__content">
          <h3>{stats.toLocaleString('en-US') + "g"}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

CardSmIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardSmIcon;
