import React, { useState, useEffect } from 'react';
import './certificados.css'; // Importe seu arquivo CSS ou estilização aqui
import img1 from '../../Certificados de formação parte 1/Formação Completa.png'
import img2 from '../../Certificados de formação parte 1/Diploma TDS.png'
import img3 from '../../Certificados de formação parte 1/Formação Front End - Alura.png'
import img4 from '../../Certificados de formação parte 1/Formação Business Agility - Alura.png'
import img5 from '../../Certificados de formação parte 1/Formação Desenvolvimento Pessoal - Alura.png'
import img6 from '../../Certificados de formação parte 1/Certificado IFPE.png'
import img7 from '../../Certificados de formação parte 1/Formação Empreendedorismo - Alura.png'
import img8 from '../../Certificados de formação parte 1/Formação Iniciante em Programação - Alura.png'
import img9 from '../../Certificados de formação parte 1/Formação React - Alura.png'

const imagesData = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,

  // Adicionar imagens
];

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const preloadImages = [];
    imagesData.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      preloadImages.push(img);
    });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesData.length);
    }, 5000); // Altere o intervalo de transição conforme necessário (3 segundos neste exemplo)

    return () => {
      clearInterval(interval);
      preloadImages.forEach((img) => {
        img.src = ''; // Limpar o cache das imagens pré-carregadas ao desmontar o componente
      });
    };
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? imagesData.length - 1 : prevImage - 1));
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imagesData.length);
  };

  return (
    <div className="image-carousel" id='formacoes'>
        <h1>FORMAÇÕES</h1>
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={goToPreviousImage}>
          &lt;
        </button>
        <img src={imagesData[currentImage]} alt={`Image ${currentImage + 1}`} className="image" />
        <button className="arrow right-arrow" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <h2><span>+80 CERTIFICADOS</span></h2>
      <h2>CONFIRA OS PRINCIPAIS ACIMA</h2>
    </div>
  );
}

export default ImageCarousel;