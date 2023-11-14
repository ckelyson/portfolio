import React from 'react';
import './rodape.css';

const Footer = () => {
  return (
    <footer id='contato'  className="footer-container">
        <div className='interfaceFooter'>
            <div className='sobre'>
                <h1>Sobre</h1>
                <p className="footer-text">Ckelyson Jheymison Cavalcante de Moura </p>
                <p className='footer-text'>20 anos</p>
                <p>Masculino</p>
                <p>Solteiro</p>
            </div>
            <div className='sobre'>
                <h1>Endereço</h1>
                <p className="footer-text">Avenida Julia Rodrigues Torres, 344, Floresta Belo Jardim – PE</p>
                <p className='footer-text'>20 anos, Masculino, Solteiro</p>
                <p>55158-108 – Brasil</p>
            </div>
            <div className='sobre'>
                <h1>Contato</h1>
                <p className="footer-text"><a href='https://wa.me/5581993332044'>(81)99333-2044</a></p>
                <p className='footer-text'><a href='mailto:contatockelyson@gmail.com'>contatockelyson@gmail.com</a></p>
            </div>
        </div>
     
      <div className="social-icons">
        <a href="https://wa.me/5581993332044" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-whatsapp"><a href='https://wa.me/5581993332044'></a></i>
        </a>
        <a href="https://instagram.com/mouraa_ckelyson?igshid=MzRlODBiNWFlZA==" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/ckelyson-jheymison-765233298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuWAJGl4uR2KvYH1WFaQT4g%3D%3D" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <div>
        <a href='https://portfolio-omega-fawn-15.vercel.app/' className='ckelyson' >2023 <i class="bi bi-c-circle"></i> Desenvolvido por Ckelyson Moura</a>
      </div>
    </footer>
  );
};

export default Footer;