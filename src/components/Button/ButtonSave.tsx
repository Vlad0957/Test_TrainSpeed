import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeSpeed } from "../../features/train/train-slice";
import "./Button.css";

interface Property {
  setView: any;
  data: {
    prop: {
      name: string;
      train: string;
    };
    speedLimits: {
      name: string;
      speedLimit: number;
    };
  };
}

interface Train {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

function ButtonSave(prop: Property) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.train);

  function handleClick() {
    if (prop.data.speedLimits.speedLimit <= 0) {
      console.log("speed must be more then zero");
    } else {
      const arrayOfSpeed: number[] = [];
      const changeTrain: any = data.find(
        (el: Train) => el.name == prop.data.prop.train
      );

      changeTrain.speedLimits.forEach(
        (el: { name: string; speedLimit: number }) => {
          if (el.name !== prop.data.speedLimits.name) {
            arrayOfSpeed.push(el.speedLimit);
          }
        }
      );
      arrayOfSpeed.push(+prop.data.speedLimits.speedLimit);
      arrayOfSpeed.sort((a, b) => a - b);

      dispatch(
        changeSpeed({
          nameOfTrain: prop.data.prop.train,
          arrayOfSpeed,
        })
      );
      console.log({
        nameOfTrain: prop.data.prop.train,
        arrayOfSpeed,
      });
    }

    prop.setView(false);
  }
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      onClick={handleClick}
      style={{
        width: "65px",
        backgroundColor: "Aquamarine",
        color: "black",
      }}
    >
      Save
    </button>
  );
}
export default ButtonSave;
