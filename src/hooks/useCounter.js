import { useState } from 'react';

const useCounter = (value) => {
  const [counter, setCounter] = useState(value);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(10);
  };
  return {
    counter,
    sumar,
    restar,
    reset,
  };
};

export default useCounter;
