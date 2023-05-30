import { useAppSelector } from "../../app/hooks";
import { useState, useEffect } from "react";
import SpeedLimit from "../SpeedLimit/SpeedLimit";
import TrainNumber from "../TrainNumber/TrainNumber";
import Discription from "../discriptionComp/Discription";
import "./TrainTable.css";

interface Train {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

function TrainTable() {
  const data = useAppSelector((state) => state.train);
  const [train, setTrain] = useState<string>(data[0].name);
  const [elem, setElem] = useState<Train>(data[0]);
  const [submited, setSubmited] = useState<string>(data[0].name);
  const [description, setDescription] = useState<string>("??");

  useEffect(() => {
    data.forEach((el: Train) => {
      if (el.name == train) {
        setElem(el);
        console.log(el.description);
        setDescription(el.description);
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
        {elem.speedLimits.map((el: { name: string; speedLimit: number }) => (
          <SpeedLimit
            name={el.name}
            train={train}
            speedLimit={el.speedLimit}
          />
        ))}

        <Discription
          setDescription={setDescription}
          description={description}
          name={train}
          descrData={elem.description}
        />
      </div>
    </div>
  );
}

export default TrainTable;
