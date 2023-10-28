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
          <li onClick={closeMenu}><a href="#introducao"><i class="bi bi-person-lines-fill"></i> Introdução </a></li>
          <li onClick={closeMenu}><a href="#especialidades"><i class="bi bi-file-earmark-text"></i> Minhas Especialidades</a></li>
          <li onClick={closeMenu}><a href="#sobre"><i class="bi bi-mortarboard"></i>Sobre Mim</a></li>
          <li onClick={closeMenu}><a href="#projetos"><i class="bi bi-person-vcard"></i> Meus Projetos</a></li>
          <li onClick={closeMenu}><a href="#contato"><i class="bi bi-telephone"></i>Fale Comigo</a></li>
          <li onClick={closeMenu}><a href="#formacoes"><i class="bi bi-journal-medical"></i> Cursos e Certificações</a></li>
          <li onClick={closeMenu}><a href="#contato"><i class="bi bi-telephone"></i> Contato</a></li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;