import React from 'react';
import Header from './components/Header';

/**
 * Um Componente e composto por : 
 */
function App() {
  /**
   * 1 - Composto por uma  parte funcional que eh
   * onde a gente manipula o javascript
   */
  return (
    <div className="App">
      {/*  2 - Um Componente eh um conjunto de parte visual  */}
      {/*  3 - CSS  */}

      <Header name="lulumeisterr"/>
    </div>
  );
}

export default App;
