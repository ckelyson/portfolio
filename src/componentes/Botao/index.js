import React, { useState } from 'react';
import './Botao.css';

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`navigation-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li>
            <a href="#introducao">
              <i className="bi bi-person-lines-fill"></i> Introdução
            </a>
          </li>
          <li>
            <a href="#especialidades">
              <i className="bi bi-file-earmark-text"></i> Minhas Especialidades
            </a>
          </li>
          <li>
            <a href="#sobre">
              <i className="bi bi-mortarboard"></i> Sobre Mim
            </a>
          </li>
          <li>
            <a href="#projetos">
              <i className="bi bi-person-vcard"></i> Meus Projetos
            </a>
          </li>
          <li>
            <a href="#contato">
              <i className="bi bi-telephone"></i> Fale Comigo
            </a>
          </li>
          <li>
            <a href="#formacoes">
              <i className="bi bi-journal-medical"></i> Cursos e Certificações
            </a>
          </li>
          <li>
            <a href="#contato">
              <i className="bi bi-telephone"></i> Contato
            </a>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;