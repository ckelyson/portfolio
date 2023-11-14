import React, { useState, useEffect } from 'react';
import './certificados.css'; // Importe seu arquivo CSS ou estilização aqui

function ImageCarousel() {
    return (
      <div id='certificados' className='background'>
        <div>
          <h1 className='tituloCertificacoes'>CURSOS E CERTIFICAÇÕES</h1>
          <div className='desenvolvimento'>
            <h1>DESENVOLVIMENTO PESSOAL - ONE</h1>
            <p>Alura + Oracle - ABR de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>Aprender a aprender: técnicas para seu autodesenvolvimento</li>
            <li>LinkedIn: como fazer o seu perfil trabalhar para você</li>
            <li>Foco: trazendo mais resultados para o dia a dia</li>
            <li>Hábitos: da produtividade às metas pessoais</li>
          </div>
          <div className='desenvolvimento'>
            <h1>INICIANTE EM PROGRAMAÇÃO - ONE</h1>
            <p>Alura + Oracle - ABR de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>JavaScript e HTML: desenvolva um jogo e pratique lógica de programação</li>
            <li>JavaScript e HTML: pratique lógica com desenhos, animações e um jogo</li>
            <li>HTML5 e CSS3 parte 1: crie uma página da Web</li>
            <li>HTML5 e CSS3 parte 2: posicionamento, listas e navegação</li>
            <li>HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas</li>
            <li>HTML5 e CSS3 parte 4: avançando no CSS</li>
            <li>Git e Github: controle e compartilhe seu código</li>
          </div>
          <div className='desenvolvimento'>
            <h1>FRONT-END - ONE</h1>
            <p>Alura + Oracle - JUL de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>Flexbox: posicione elementos na tela</li>
            <li>Layouts Responsivos: trabalhando com layouts mobile</li>
            <li>Arquitetura CSS: descomplicando os problemas</li>
            <li>JavaScript: explorando a linguagem</li>
            <li>JavaScript na Web: manipule o DOM com JavaScript</li>
            <li>JavaScript: métodos de array</li>
            <li>JavaScript: consumindo e tratando dados de uma API</li>
            <li>JavaScript: criando requisições</li>
            <li>JavaScript: validando formulários</li>
          </div>
          <div className='desenvolvimento'>
            <h1>BUSINESS AGILITY - ONE</h1>
            <p>Alura + Oracle - JUL de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>Agilidade: promovendo a transformação ágil</li>
            <li>Gestão Ágil: liderando a mudança em um ambiente de agilidade</li>
            <li>A Empresa Ágil: implemente o Business Agility nas organizações</li>
            <li>Organização de Equipes Ágeis: os papéis existentes em uma equipe</li>
          </div>
          <div className='desenvolvimento'>
            <h1>EMPREENDEDORISMO - ONE</h1>
            <p>Alura + Oracle - AGO de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>Lean Startup: primeiros passos da sua Startup enxuta</li>
            <li>Empreendedorismo: da ideia ao plano de negócios</li>
            <li>Empreendedorismo: abrindo sua empresa do jeito certo</li>
            <li>Pitch entrevistas: Faça apresentações de impacto</li>
            <li>Business Model Canvas parte I: um modelo poderoso para o seu negócio</li>
            <li>Business Model Canvas parte II: avance no seu modelo de negócios</li>
          </div>
          <div className='desenvolvimento'>
            <h1>REACT - ONE</h1>
            <p>Alura + Oracle - JUL de 2023</p>
            <p className='cursoNegrito'>CURSOS:</p>
            <li>React: desenvolvendo com JavaScript</li>
            <li>React: como os componentes funcionam</li>
            <li>React: desenvolvendo em React Router com JavaScript</li>
            <li>React: Function Components, uma abordagem moderna</li>
            <li>React: Hooks, Contextos e boas práticas</li>
            <li>React: praticando React com Js</li>
          </div>
        </div>
      </div>
    )
}

export default ImageCarousel;