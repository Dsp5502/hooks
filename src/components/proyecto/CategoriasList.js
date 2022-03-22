import React from 'react';
import Cards from './Cards';

const CategoriasList = ({ categoria }) => {
  console.log(categoria);
  return (
    <>
      <h1>Categoria List</h1>
      {categoria.map((cate, index) => (
        <Cards key={index} nombre={cate} />
      ))}
    </>
  );
};

export default CategoriasList;
