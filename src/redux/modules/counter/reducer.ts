import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  currentNumber: 0,
};

export type CounterProps = {
  currentNumber: number;
};

export const reducerCounter: Reducer<CounterProps> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT": {
        draft.currentNumber = state.currentNumber + 1;
      }
    }
  });
};
