import React from 'react';

const ComentarioData = ({data, formatarData}) => (
    <div className="comentario-data">
        {formatarData()}
    </div>
);

export default ComentarioData;