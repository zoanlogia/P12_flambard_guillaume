import ButtonLink from "@/components/buttons/ButtonLink.jsx";
import "./sidebar.scss";
import yoga from "@/assets/img/yoga-icon.svg";
import swim from "@/assets/img/swim-icon.svg";
import bicycle from "@/assets/img/bicycle-icon.svg";
import gym from "@/assets/img/gym-icon.svg";

/**
 * The Sidebar component renders a sidebar with icons for different activities and a copyright notice.
 * @returns The Sidebar component is returning a JSX element.
 */
const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar">
      <div className="sidebar__wrapper">
        <ul>
          <li>
            <ButtonLink className={'yoga-icon'} src={yoga} alt="yoga" />
          </li>
          <li>
            <ButtonLink className={'swim-icon'} src={swim} alt="swim" />
          </li>
          <li>
            <ButtonLink className={'bycicle-icon'} src={bicycle} alt="bicycle" />
          </li>
          <li>
            <ButtonLink className={'gym-icon'} src={gym} alt="gym" />
          </li>
        </ul>
        <div>
          <p>Copyright, Sportsee 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
