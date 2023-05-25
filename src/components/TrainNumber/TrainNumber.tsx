import { useState, useEffect } from "react";
import "./TrainNumber.css";

interface TrainNumber {
  setTrain: () => string;
  name: string;
  train: string;
  setSubmited: () => string;
  submited: string;
}

function TrainNumber(prop: TrainNumber) {
  const [color, setColor] = useState<string>("silver");

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
      onClick={() => {
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
