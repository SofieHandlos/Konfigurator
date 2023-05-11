import Ombra from "../images/designs/designombra.png";
import PaviaWhite from "../images/designs/designpaviawhite.png";
import PaviaGrey from "../images/designs/designpaviagrey.png";
import ManoBlack from "../images/designs/designmanoblack.png";
import ManoGrey from "../images/designs/designmanogrey.png";
import ManoWhite from "../images/designs/designmanowhite.png";
import "../stylingsheets/DesignChoice.css";

export default function DesignChoice() {
  return (
    <div className="main-content">
      <h4>Step 1/7</h4>
      <div>
        <h2>Vælg farve</h2>
        <span class="choosecolor-colordots colordot1"></span>
        <span class="choosecolor-colordots colordot2"></span>
        <span class="choosecolor-colordots colordot3"></span>
        <span class="choosecolor-colordots colordot4"></span>
        <span class="choosecolor-colordots colordot5"></span>
        <span class="choosecolor-colordots colordot6"></span>
        <span class="choosecolor-colordots colordot7"></span>
        <span class="choosecolor-colordots colordot8"></span>
        <span class="choosecolor-colordots colordot9"></span>
      </div>
      <h2>Vælg design</h2>
      <div className="product-card-scroll">
        <div className="product-card">
          <img className="" src={Ombra} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Ombra</h2>
            <h4>12.000 kr.</h4>
            <span class="productcard-colordot productcard-colordot1"></span>
          </div>
        </div>

        <div className="product-card">
          <img className="" src={PaviaWhite} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Pavia</h2>
            <h4>8.500kr.</h4>
            <span class="productcard-colordot productcard-colordot2"></span>
            <span class="productcard-colordot productcard-colordot3"></span>
          </div>
        </div>

        <div className="product-card">
          <img className="" src={PaviaGrey} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Pavia</h2>
            <h4>8.000 kr.</h4>
            <span class="productcard-colordot productcard-colordot3"></span>
            <span class="productcard-colordot productcard-colordot2"></span>
          </div>
        </div>

        <div className="product-card">
          <img className="" src={ManoBlack} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Mano</h2>
            <h4>13.000 kr.</h4>
            <span class="productcard-colordot productcard-colordot4"></span>
            <span class="productcard-colordot productcard-colordot5"></span>
            <span class="productcard-colordot productcard-colordot2"></span>
          </div>
        </div>

        <div className="product-card">
          <img className="" src={ManoGrey} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Mano</h2>
            <h4>14.000kr.</h4>
            <span class="productcard-colordot productcard-colordot5"></span>
            <span class="productcard-colordot productcard-colordot4"></span>
            <span class="productcard-colordot productcard-colordot2"></span>
          </div>
        </div>

        <div className="product-card">
          <img className="" src={ManoWhite} alt="bathdesign"></img>
          <div className="product-details">
            <h2>Mano</h2>
            <h4>14.250 kr.</h4>
            <span class="productcard-colordot productcard-colordot2"></span>
            <span class="productcard-colordot productcard-colordot4"></span>
            <span class="productcard-colordot productcard-colordot5"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
