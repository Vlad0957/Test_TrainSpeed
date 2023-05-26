import "./Button.css";

function ButtonChange(prop:any) {
  function handleClick() {
    prop.setView(true);
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
