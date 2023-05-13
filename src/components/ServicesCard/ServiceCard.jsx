
import "./serviceCard.css";
// eslint-disable-next-line react/prop-types
function ServiceCard({source, title}) {
    return (
      <div className="serviceCard flex flex-col items-center text-center text-whiteBG">
        <img src={source} alt="" />
        <p className="mt-3">{title}</p>
      </div>
    );
  }

export default ServiceCard;