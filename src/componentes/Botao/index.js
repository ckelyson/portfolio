import React, { useState } from 'react';
import './Botao.css'

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu =() => {
    setMenuOpen(false);
  }

  return (
    <div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <nav className={`navigation-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li onClick={closeMenu}><a href="#introducao"><i class="bi bi-person-lines-fill"></i> Perfil Profissional</a></li>
          <li onClick={closeMenu}><a href="#objetivos"><i class="bi bi-file-earmark-text"></i> Objetivos</a></li>
          <li onClick={closeMenu}><a href="#formacao"><i class="bi bi-mortarboard"></i> Formação</a></li>
          <li onClick={closeMenu}><a href="#experiencia"><i class="bi bi-person-vcard"></i> Experiências Profissionais</a></li>
          <li onClick={closeMenu}><a href="#conhecimentos"><i class="bi bi-file-earmark-code"></i> Conhecimentos de softwares/ferramentas</a></li>
          <li onClick={closeMenu}><a href="#cursos"><i class="bi bi-journal-medical"></i> Cursos e Certificações</a></li>
          <li onClick={closeMenu}><a href="#contato"><i class="bi bi-telephone"></i> Contato</a></li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;