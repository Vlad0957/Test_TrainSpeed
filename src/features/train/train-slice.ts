import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../dataFromGitHub";

interface TrainInfo {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}
interface ChangeData {
  arrayOfSpeed: number[];
  nameOfTrain: string;
}

const initialState: TrainInfo[] = data;

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    changeSpeed(state, action: PayloadAction<ChangeData>) {
      state.forEach((el) => {
        if (el.name == action.payload.nameOfTrain) {
          el.speedLimits.forEach((el, i) => {
            el.speedLimit = action.payload.arrayOfSpeed[i];
          });
        }
      });
    },
  },
});

export const { changeSpeed } = trainSlice.actions;
export default trainSlice.reducer;
