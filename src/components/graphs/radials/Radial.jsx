import SimpleRadarChart from "@/components/recharts/SimpleRadarChart";
import "./Radial.scss";

const Radial = () => {
  return (
    <div id="radial" className="radial">
      <div className="radial__wrapper">
        <SimpleRadarChart />
      </div>
    </div>
  );
};

export default Radial;
