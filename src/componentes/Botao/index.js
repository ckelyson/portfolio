import React, { useState } from 'react';
import './Botao.css';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-navigation ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
      <i class="bi bi-list"></i>
      </button>

      <ul className="menu-list">
        <a href='#introducao'>Inicio</a>
        <a href='#especialidades'>Especialidades</a>
        <a href='#sobre'>Sobre Mim</a>
        <a href='#projetos'>Projetos</a>
      </ul>
    </div>
  );
};

export default MobileNavigation;