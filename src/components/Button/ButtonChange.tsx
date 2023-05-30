import "./Button.css";

interface PropertiesToButtonChange {
  setView: any;
  setLimit: any;
  speedLimit: number;
}
function ButtonChange(prop: PropertiesToButtonChange) {
  function handleClick() {
    prop.setView(true);
    prop.setLimit(prop.speedLimit);
  }
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      style={{
        width: "65px",
      }}
      onClick={handleClick}
    >
      Change
    </button>
  );
}
export default ButtonChange;
