import { useAppSelector } from "../../app/hooks";
import { useState, useEffect } from "react";
import SpeedLimit from "../SpeedLimit/SpeedLimit";
import TrainNumber from "../TrainNumber/TrainNumber";
import "./TrainTable.css";

function TrainTable() {
  const data = useAppSelector((state) => state.train);
  const [train, setTrain] = useState(data[0].name);
  const [elem, setElem] = useState(data[0]);
  const [submited, setSubmited] = useState(data[0].name);

  useEffect(() => {
    data.forEach((el) => {
      if (el.name == train) {
        setElem(el);
      }
    });
  }, [train]);

  return (
    <div className="MainContainer">
      <div className="TableContainer">
        {data.map((elem: any) => {
          return (
            <TrainNumber
              setTrain={setTrain}
              name={elem.name}
              train={train}
              setSubmited={setSubmited}
              submited={submited}
            />
          );
        })}
      </div>
      <div>
        {elem.speedLimits.map((el: any) => (
          <SpeedLimit name={el.name} train={train} />
        ))}
      </div>
    </div>
  );
}

export default TrainTable;
