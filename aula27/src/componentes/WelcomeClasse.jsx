import React from 'react';

class WelcomeClasse extends React.Component{

    render(){

        return(
            <>
                <h1>Hello World</h1>
                <h2>Bem vindo(a), {this.props.usuario.primeiroNome}</h2>
                <h3>Esse é um componente de classe</h3>
            </>
        )
    }

}

export default WelcomeClasse;

