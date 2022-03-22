import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = (props) => {
  const [counter, setCounter] = useState(props.valor);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(10);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button onClick={sumar} variant='warning'>
        Sumar
      </Button>
      <Button onClick={reset} variant='danger'>
        Reset
      </Button>
      <Button onClick={restar} variant='warning'>
        Restar
      </Button>
    </div>
  );
};

export default Counter;
