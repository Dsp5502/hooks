import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Fondo = styled.div`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const ContenedorBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 15px;
`;

const Counter = ({ valor }) => {
  const [counter, setCounter] = useState(valor);

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
    <Fondo>
      <h1>
        <strong>Counter:</strong> {counter}
      </h1>
      <ContenedorBtn>
        <Button onClick={sumar} variant='warning'>
          Sumar
        </Button>
        <Button onClick={reset} variant='danger'>
          Reset
        </Button>
        <Button onClick={restar} variant='warning'>
          Restar
        </Button>
      </ContenedorBtn>
    </Fondo>
  );
};

export default Counter;
