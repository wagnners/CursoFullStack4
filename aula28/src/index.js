import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// class Car extends React.Component {
  
//   constructor(props){

//     super(props);
    
//     this.state = {
//       marca: "Renault",
//       modelo: "Kwid",
//       cor: "Azul",
//       ano: 2019
//     }
//   }

//   mudarCor = () => {
//     this.setState({cor: "Branca"});
//   }

//   render(){
//     return (
//       <div>
//         <h1>Meu Carro é o {this.state.marca} - {this.state.modelo}</h1>
//         <h3>Ele é {this.state.cor} de {this.state.ano}</h3>
//         <button type="button" onClick={this.mudarCor}>Mudar Cor</button>
//       </div>
//     )
//   }
// }

// class Clock extends React.Component {
  
//   constructor(props){

//     super(props);
    
//     this.state = {data: new Date()}
//   }

//   componentDidMount(){
//     this.timerId = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerId);
//   }

//   tick = () => {
//     this.setState({data: new Date()})
//   }

//   render(){
//     return (
//       <div>
//         <h1>Olá Mundo!</h1>
//         <h3>Agora são {this.state.data.toLocaleTimeString()}</h3>
//       </div>
//     )
//   }
// }

class Togle extends React.Component {
  
  constructor(props){

    super(props);

    this.state = {
      isOn: false
    };
  
  }

  handleClick = () => {
    this.setState(
      {
        isOn : !this.state.isOn
      }
    )
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? "ON" : "OFF"}
      </button>
    )
  }
}

ReactDOM.render(
  <Togle />,
  document.getElementById('root')
);


