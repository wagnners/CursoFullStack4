import React from 'react';
import ReactDOM from 'react-dom';

import { WelcomeFuncional, Comentario} from './componentes/ComponentesFuncionais';
import WelcomeClasse from './componentes/WelcomeClasse';

const helloWorld = (
  <>
    <h1>Hello World</h1>
    <h2>Aula 27</h2>
  </>
);

function helloWorld2(){
  return(
    <>
      <h1>Hello World 2</h1>
      <h2>Aula 27</h2>
    </>
  )
}

const helloWorld3 = <h1>Hello World 3</h1>;


function monstarNome(usuario){
  return usuario.primeiroNome + " " + usuario.segundoNome;
}

const usuario = {
  primeiroNome : 'Maria',
  segundoNome : 'Silva',
}

const elemento = (
  <h1>
    Bom dia, {monstarNome(usuario)}
  </h1>
)

function verificausuario(user){
 
  if(user){
    return <h1>Olá, {monstarNome(usuario)}</h1>
  }

  return <h1>Seja bem vindo!</h1>

}

// ReactDOM.render(
//   <>
//     <WelcomeFuncional usuario={usuario} />
//     <WelcomeFuncional usuario={{primeiroNome : "Pedro"}} />
//     <WelcomeFuncional usuario={{primeiroNome : "Ricardo"}} />
//     <hr/>
//     <WelcomeClasse usuario={usuario} />
//   </>,
//   document.getElementById('root')
// );
const comentario = {
  data : new Date(),
  texto: "Espero que goste de aprender react",
  autor: {
    nome: "Maria Silva",
    avatar: "https://placekitten.com/g/64/64"
  }
}
ReactDOM.render(
  <Comentario data={comentario.data} texto={comentario.texto} autor={comentario.autor} />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals