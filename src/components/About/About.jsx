import "./about.css";
import MonitorIcon from "../../assets/icon-monitor.svg";
import MobileIcon from "../../assets/icon-mobile.svg";
import BrushIcon from "../../assets/icon-brush.svg";
import ServiceCard from "../ServicesCard/ServiceCard";
function About() {
  return (
    <section className="aboutCont">
      <h2 className="">.about</h2>
      <div className="servicesCont">
        <h3>services:</h3>
        <div className="servicesCont__cardCont">
          <ServiceCard source={MonitorIcon} title={"Web Development"} />
          <ServiceCard source={BrushIcon} title={"UX / UI"} />
          <ServiceCard source={MobileIcon} title={"Responsive Design"} />
        </div>
      </div>
    </section>
  );
}

export default About;
