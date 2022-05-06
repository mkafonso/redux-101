import { createStore, Store } from "redux";
import { CounterProps } from "./counter/reducer";
import rootReducer from "./rootReducer";

export type GlobalProps = {
  counter: CounterProps;
};

export const store: Store<GlobalProps> = createStore(rootReducer);
