import React from 'react';

/**
 * Stateless component (Funcao), Podemos criar componentes no react utilizando funcoes
 * -> Deixa o codigo menos verboso , mais clean
 * 
 * -> Mais rapido pois nao possui varias implementacoes
 * 
 * -> Stateles functional - funcao pura onde so depende das entradas nas assinaturas do metodo , 
 * onde fica mais facil de testar .
 * 
 * 
 * Quando usamos esse component?
 * R : Quando necessitamos renderizar(exibir,fixar,) a tela , acoes simples
 * pois o react somente atualiza o necessário ompara o elemento 
 * novo e seus filhos com os anteriores
 * 
 */

 //extricter assign -> Extrair somente oque eu quero de um objeto

 import "./styles.css";
 
const Header = ({name}) => {
    return(
        <header id="main">
            Primeiro componente do {name}
        </header>
    );
};

export default Header;

/**
 * Seria a mesma coisa do exemplo a cima
 * 
 */

// class Header extends Component {
//     render(){
//         return <h1>Teste</h1>
//     }
// }