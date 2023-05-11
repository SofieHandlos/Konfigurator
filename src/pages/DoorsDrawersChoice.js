import Doors from "../images/doors+drawers/doors.png";
import Drawers from "../images/doors+drawers/drawers.png";
import "../stylingsheets/DoorsDrawersChoice.css";

export default function DoorsDrawersChoice() {
  return (
    <div className="main-content">
      <h4>Step 3/7</h4>
      <h2>Vælg skuffer eller låger</h2>
      <div className="product-card-container-step3">
        <div className="product-card-step3">
          <img className="" src={Drawers} alt="design with drawers"></img>
          <div className="product-details-step3">
            <h2>Skuffer</h2>
            <h4>+ 0 kr.</h4>
          </div>
        </div>
        <div className="product-card-step3">
          <img className="" src={Doors} alt="design with doors"></img>
          <div className="product-details-step3">
            <h2>Låger</h2>
            <h4>+ 199 kr.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
