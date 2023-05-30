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
  arrayOfSpeed?: number[];
  nameOfTrain: string;
  description?: string;
}

const initialState: TrainInfo[] = data;

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    changeSpeed(state, action: PayloadAction<ChangeData>) {
      console.log(action.payload)
      state.forEach((el) => {
        if (el.name == action.payload.nameOfTrain) {
          el.speedLimits.forEach((el, i) => {
            el.speedLimit = action.payload.arrayOfSpeed[i];
          });
        }
      });
    },
    changeDescription(state, action: PayloadAction<ChangeData>){
      // console.log(action.payload, 'action.payload!!!')
        state.forEach((el) => {
          if (el.name == action.payload.nameOfTrain) {
            el.description = action.payload.description
          
        };
      })
    
  }
}
});

export const { changeSpeed, changeDescription } = trainSlice.actions;
export default trainSlice.reducer;
