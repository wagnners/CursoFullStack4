import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import meuStilo from './my_style.module.css';
import './style_sass.scss';

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

// class Togle extends React.Component {
  
//   constructor(props){

//     super(props);

//     this.state = {
//       isOn: false
//     };
  
//   }

//   handleClick = () => {
//     this.setState(
//       {
//         isOn : !this.state.isOn
//       }
//     )
//   }

//   render(){
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isOn ? "ON" : "OFF"}
//       </button>
//     )
//   }
// }

class Formulario extends React.Component {
  
  constructor(props){

    super(props);

    this.state = {
      nome: "",
      sobrenome: "",
      fruta: "laranja",
      status: true
    };
  
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  
  handleInputChange = (event) => {
    
    const value = event.target.name === "status" ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name] : value
    })
   
  }

  render(){

    const labelCSS = {
      display: "inherit",
      padding: "5px 0px"
    };

    return (
      <> 
        <h2 style={{backgroundColor: "lightblue", fontSize: "30px"}} >Cadastro de Pessoa</h2>
        <form onSubmit={this.handleSubmit} className={meuStilo.fomulario}>
          <label style={labelCSS}>Nome: </label>
          <input type="text" name="nome" className="input" value={this.state.nome} onChange={this.handleInputChange}></input>
          <label style={labelCSS}>Sobrenome: </label>
          <input type="text" name="sobrenome" className="input" value={this.state.sobrenome} onChange={this.handleInputChange}></input>
          <label style={labelCSS}>Fruta Favorita: </label>
          <select name="fruta" value={this.state.fruta} className="input" onChange={this.handleInputChange}>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
          <label>Status: </label>
          <input name="status" type="checkbox" checked={this.state.status} onChange={this.handleInputChange}></input>
          <br/>
          <br/>
          <input type="submit" value="Salvar"></input>
        </form>
      </>
    )
  }
}

ReactDOM.render(
  <Formulario />,
  document.getElementById('root')
);


