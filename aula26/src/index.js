import React, { Fragment } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {Titulo, Subtitulo}  from './components/Titulos'

// Exemplo 1
// const TITULO = () => {
//     return (
//         <h1>Aula 26</h1>
//     );
// };

// const SUBTITULO = () => (
//     <h3>Primeira aplicação REACTJS (2)</h3>
// )

// ReactDOM.render(
//     <>
//         <TITULO /><SUBTITULO />
//     </>,
//     document.getElementById('root')
// );

// Exemplo 2
// ReactDOM.render(
//     <>
//         <Titulo titulo="Aula 26" ></Titulo><Subtitulo subtitulo="Primeira Aula de ReactJS" />
//     </>,
//     document.getElementById('root')
// );



// Exemplo 3

const ComponentRelogio = () => {

    return(   
        <div>
            <Titulo titulo="Hello World"></Titulo>
            <Subtitulo subtitulo={`Agora é: ${new Date().toLocaleTimeString()}`} />
        </div>
    );
}

function tick(){
    ReactDOM.render(
        <ComponentRelogio />, document.getElementById('root')
    );
}

setInterval(tick, 1000);


