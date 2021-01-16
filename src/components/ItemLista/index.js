// Importando o componente React da dependencia react
import React from 'react';

// Importando css
import './style.css';

// Exportando componente padrão, criando a função ItemLista e inserindo o parametro props 
export default function ItemLista(props) {
  return (
        // Definindo onde as propriedades vão aparecer
        <div className="boxSigno">
            <div className="nomeSigno">
                { props.signo }
            </div>

            <img className="imagemSigno" src={ props.imagem } alt={ props.signo }/>

            <div className="periodoNascimento">
                { props.dataInicio } - { props.dataFim }
            </div>
        </div>
    );
}