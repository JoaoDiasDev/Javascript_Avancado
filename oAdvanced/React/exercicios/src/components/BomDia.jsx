//alternativas para exportar multiplos componentes.
import React from 'react';

export const BomDia = props => [
    <h1 key="h1">Bom dia {props.nome}!</h1>,
    <h2 key="h2">Até breve!</h2>
]


// export const BomDia = props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export const BomDia = props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>