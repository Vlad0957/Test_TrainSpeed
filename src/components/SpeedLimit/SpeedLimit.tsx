import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import ButtonChange from "../Button/ButtonChange";
import ButtonSave from "../Button/ButtonSave";
import "./SpeedLimit.css";

interface DataFromTrainTable {
  name: string;
  train: string;
}

interface Train {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

function SpeeedLimit(prop: DataFromTrainTable) {
  let speedLimit: number = 0;
  let prevSpeedLimit: number = 0;
  let nextSpeedLimit: number = 0;
  const data = useAppSelector((state) => state.train);
  data.forEach((el: Train) => {
    if (el.name == prop.train) {
      el.speedLimits.forEach((el, i, array) => {
        if (el.name == prop.name) {
          speedLimit = el.speedLimit;
          console.log(array[i - 1], "el[e-1]");
          if (i !== 0) {
            prevSpeedLimit = array[i - 1].speedLimit;
            if (i !== array.length - 1) {
              nextSpeedLimit = array[i + 1].speedLimit;
            } else {
              nextSpeedLimit = 400;
            }
          } else {
            // nextSpeedLimit = array[i+1].speedLimit
            // array[i+1].speedLimit
            // console.log(array[i+1].speedLimit, 'element')
          }
        }
      });
    }
  });

  const [limit, setLimit] = useState<number>(speedLimit);
  const [view, setView] = useState<boolean>(false);
  console.log(prevSpeedLimit, nextSpeedLimit);
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
            placeholder={String(speedLimit)}
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="input"
            value={limit}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLimit(+event.target.value)
            }
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
            prevSpeedLimit={prevSpeedLimit}
            nextSpeedLimit={nextSpeedLimit}
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
