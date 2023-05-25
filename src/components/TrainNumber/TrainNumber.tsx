import { useState, useEffect } from "react";
import "./TrainNumber.css";

function TrainNumber(prop) {
  const [color, setColor] = useState("silver");

  useEffect(() => {
    if (prop.submited == prop.name) {
      setColor("gray");
    }
    if (prop.submited !== prop.name) {
      setColor("silver");
    }
  }, [prop.submited]);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={(e) => {
        e.preventDefault();
        prop.setTrain(prop.name);
        setColor("gray");
        prop.setSubmited(prop.name);
      }}
      onMouseEnter={() => setColor("gray")}
      onMouseLeave={() => {
        if (prop.submited !== prop.name) setColor("silver");
      }}
      style={{
        backgroundColor: color,
        color: "black",
      }}
    >
      {prop.name}
    </button>
  );
}

export default TrainNumber;
