import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import ButtonChange from "../Button/ButtonChange";
import ButtonSave from "../Button/ButtonSave";
import "./SpeedLimit.css";

function SpeeedLimit(prop) {
  const data = useAppSelector((state) => state.train);
  let speedLimit;
  data.forEach((el) => {
    if (el.name == prop.train) {
      el.speedLimits.forEach((el) => {
        if (el.name == prop.name) {
          speedLimit = el.speedLimit;
        }
      });
    }
  });

  const [limit, setLimit] = useState(speedLimit);
  const [view, setView] = useState(false);

  return (
    <div className="Container03">
      <span className="SpeedName">{prop.name}</span>

      {view && (
        <div
          className="Container04"
          onMouseLeave={() => {
            setView(false);
          }}
        >
          <input
            type="number"
            className="Input"
            placeholder={speedLimit}
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="input"
            onChange={(event) => setLimit(event.target.value)}
          ></input>
          <ButtonSave
            setView={setView}
            data={{
              prop,
              speedLimits: {
                name: prop.name,
                speedLimit: limit,
              },
            }}
          />
        </div>
      )}
      {!view && (
        <div className="Container05">
          <span className="Speed">{speedLimit}</span>
          <ButtonChange setView={setView} />
        </div>
      )}
    </div>
  );
}

export default SpeeedLimit;
