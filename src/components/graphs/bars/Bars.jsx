import SimpleChartBar from "@/components/recharts/SimpleBarChart";
import "./Bars.scss";

const Bars = () => {
  return (
    <div id="bars" className="bars">
      <div className="bars__wrapper">
        <div className="bars__wrapper__title">
          <h4>Activité quotidienne</h4>
        </div>
        <div className="bars__wrapper__legend">
          <h4>
            <span className="dot--black" />
            Poids (kg)
          </h4>
          <h4>
            <span className="dot--red" />
            Calories brûlées (kCal)
          </h4>
        </div>
      </div>
      <SimpleChartBar />
    </div>
  );
};

export default Bars;
