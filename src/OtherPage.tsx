import { useSelector } from "react-redux";
import { GlobalProps } from "./redux/modules/store";

export const OtherPage = () => {
  const currentNumber = useSelector<GlobalProps>(
    (state) => state.counter.currentNumber
  ) as number;

  return <h1>Current value = {currentNumber}</h1>;
};
