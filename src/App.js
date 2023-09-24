import './App.css';
import Formulario from './componentes/Formulario';
import Inicio from './componentes/Inicio';
import Introducao from './componentes/Introdução';
import MinhasEspecialidades from './componentes/MinhasEspecialidades';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';
import Sobre from './componentes/Sobre';
import ImageCarousel from './componentes/certificados';

function App() {
  return (
    <>
      <Inicio />
      <Introducao />
      <MinhasEspecialidades/>
      <Sobre/>
      <Projetos/>
      <Formulario/>
      <ImageCarousel/>
      <Rodape/>
    </>
  );
}

export default App;
