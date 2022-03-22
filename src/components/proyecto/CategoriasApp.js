import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CategoriasList from './CategoriasList';

const CategoriasApp = () => {
  const [categorias, setCategorias] = useState([
    'funny',
    'Horror',
    'Heroes',
    'suspenso',
  ]);
  const handleAdd = () => {
    setCategorias([...categorias, 'Comedia']);
    console.log(categorias);
  };
  return (
    <>
      <h1>Componentes con hooks</h1>
      <ol>
        <CategoriasList categoria={categorias} />
      </ol>
      <Button variant='warning' onClick={handleAdd}>
        Agregar
      </Button>
    </>
  );
};

export default CategoriasApp;
