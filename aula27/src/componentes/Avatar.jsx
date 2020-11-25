import React from 'react';

const Avatar = ({autor}) => (
    <img className="avatar" src={autor.avatar} alt={autor.nome} />
);

export default Avatar;