import "../stylingsheets/SizeChoice.css";

export default function SizeChoice() {
  return (
    <div className="main-content">
      <h4>Step 2/7</h4>
      <div>
        <h2>Vælg bredde</h2>
        <div className="size-button-container">
          <h2 className="size-button">60cm</h2>
          <h2 className="size-button">80cm</h2>
          <h2 className="size-button">100cm</h2>
          <h2 className="size-button">120cm</h2>
        </div>
      </div>

      <div>
        <h2>Vælg dybde</h2>
        <div className="size-button-container">
          <h2 className="size-button">51,2cm</h2>
          <h2 className="size-button">32cm</h2>
        </div>
      </div>

      <div>
        <h2>Vælg dybde</h2>
        <div className="size-button-container">
          <h2 className="size-button">48cm</h2>
          <h2 className="size-button">64cm</h2>
        </div>
      </div>
    </div>
  );
}
