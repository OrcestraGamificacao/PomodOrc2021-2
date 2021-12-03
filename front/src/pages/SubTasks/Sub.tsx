import React from 'react';
import App from '../../components/Tasks/App'
import '../../components/Tasks/index.css';

function Sub() {
  return ( 
    <div className="Sub">
        <App/>

        <div className="back-button-todo">
            <a href="/" id="backTodo">VOLTAR</a>
        </div>
        
        <a href="/" className="init">
          <text>Voltar</text>
        </a>

    </div>
  );
}

export default Sub;