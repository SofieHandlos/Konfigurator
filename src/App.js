import { Routes, Route } from "react-router-dom";
import BathConfiguration from "./images/bath.png";
import ResetIcon from "./images/reseticon.png";
import OrderlistIcon from "./images/orderlist.png";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      {/* Main content */}
      <main className="main">
        <div className="homepage-buttons">
          <div className="full-price">
            <h3>Pris</h3>
            <h1>13.000 kr.</h1>
          </div>

          {/* Nulstil og gem knapper */}
          <div className="reset-save-button-container">
            <div>
              <img
                className="reset-icon"
                src={ResetIcon}
                alt="reset icon"
              ></img>
            </div>
            <h3 className="save-button">Gem</h3>
          </div>

          {/* Ordreliste knap */}
          <div className="orderlist-button-container">
            <div className="order-list-button">
              <img
                className="orderlist-icon"
                src={OrderlistIcon}
                alt="orderlist icon"
              ></img>
              <div />
              <h3 className="orderlist-text">Ordreliste</h3>
            </div>
          </div>
        </div>
        <div>
          {/* Konfigurationsbillede */}
          <img
            className="configuration-image"
            src={BathConfiguration}
            alt="configurationimage"
          ></img>
        </div>
        {/* Routes til HomePage*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
