import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Inicia a aplicacao pela index.js
 * Todo lugar  que utilizarmos o <App> Sera necessario utilizar o react no contexto para o JSX funcionar
 * 
 * ReactDOM -> Sera utilizado uma unica vez por toda a aplicacao, ele renderiza
 * o primeiro componente e adiciona o <App> dentro de uma div no index.html com o id root.
 * Ou seja pegamos o conteudo que temos no componente App e jogamos para a div com o id Root
 * 
 * O React DOM é o responsável por atualizar o DOM para exibir os elementos React.
 * 
 * Elementos React são imutáveis. Uma vez criados, 
 * você não pode alterar seus elementos filhos ou atributos.
 * 
 * 
 * https://pt-br.reactjs.org/docs/rendering-elements.html
 */
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root')
);

serviceWorker.unregister();
