import React from 'react';
import Avatar from './Avatar';
import InfoName from './InfoName';
import ComentarioTexto from './ComentarioTexto';
import ComentarioData from './ComentarioData';

export const WelcomeFuncional = ({ usuario }) => (
    <>
        <h1>Hello World</h1>
        <h2>Bem vindo(a), {usuario.primeiroNome}</h2>
        <h3>Esse é um componente funcional</h3>
    </>
)

function formatarData(data){
    return data.toLocaleDateString();
}

const UsuarioInfo = ({autor}) => (
    <div className="usuario-info">
        <Avatar autor={autor} />
        <InfoName autor={autor} />        
    </div>
)

export const Comentario = ({autor, texto, data}) => (
    <div className="comentario">
        <UsuarioInfo autor={autor} />
        <ComentarioTexto texto={texto} />
        <ComentarioData data={data} formatarData={() => formatarData(data)} />
    </div>
);
