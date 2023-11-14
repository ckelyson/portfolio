import './App.css';
import Inicio from './componentes/Inicio';
import Introducao from './componentes/Introdução';
import MinhasEspecialidades from './componentes/MinhasEspecialidades';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Rodape';
import Sobre from './componentes/Sobre';
import ImageCarousel from './componentes/certificados';

function App() {
  return (
    <>
      <Inicio />
      <Introducao />
      <Sobre/>
      <MinhasEspecialidades/>
      <Projetos/>
      <ImageCarousel/>
      <Footer/>
    </>
  );
}

export default App;
