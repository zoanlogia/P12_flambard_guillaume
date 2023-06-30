import RenderLineChart from "@/components/recharts/RenderLineChart";
import "./Lines.scss";

const Lines = () => {
  return (
    <div id="lines" className="lines">
      <div className="lines__wrapper">
        <div className="lines__wrapper__title">
          <h2>Durée moyenne des <br /> sessions</h2>
        </div>
      </div>
      <RenderLineChart  />
    </div>
  );
};

export default Lines;
