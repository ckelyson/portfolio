import './App.css';
import Formulario from './componentes/Formulario';
import Inicio from './componentes/Inicio';
import Introducao from './componentes/Introdução';
import MinhasEspecialidades from './componentes/MinhasEspecialidades';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <>
      <Inicio />
      <Introducao />
      <MinhasEspecialidades/>
      <Sobre/>
      <Projetos/>
      <Formulario/>
      <Rodape/>
    </>
  );
}

export default App;
