import { useDispatch, useSelector } from "react-redux";
import { handleIncrement } from "./redux/modules/counter/action";
import { GlobalProps } from "./redux/modules/store";

// pegar dados: useSelector
// disparar uma action: useDispatch

export const App = () => {
  const dispatch = useDispatch();
  const currentNumber = useSelector<GlobalProps>(
    (state) => state.counter.currentNumber
  ) as number;

  return (
    <div>
      <h1>Número atual: {currentNumber}</h1>
      <button onClick={() => dispatch(handleIncrement())}>CLICK ME</button>
    </div>
  );
};
