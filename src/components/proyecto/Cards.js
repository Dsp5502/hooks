import React, { useEffect, useState } from 'react';
// import { Button, Card } from 'react-bootstrap';

const Cards = ({ nombre }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    imgGif().then((imgData) => setImagenes(imgData));
  }, []);

  const imgGif = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=diF9QbZWOduvwz0HF4dj6VXTkbXuaBT3';

    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    const imgData = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url,
      };
    });
    return imgData;
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <ol>
        {imagenes.map((img) => (
          <li key={img.id}>
            <h3>{img.title}</h3>
            <img src={img.url} alt='' />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cards;
