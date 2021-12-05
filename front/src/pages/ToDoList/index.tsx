import React from 'react';
import '../../components/Todo/App.css'
import TodoList from 'components/Todo/TodoList';
import '../../components/Todo/'

function Lista() {
  return (
    <div className="Lista">
        <div className="todo-app">
        
            <TodoList/>

            <a href="/" className="logo">
                <text id="pomodLOGO">POMOD</text>
                <text id="orcLOGO">ORC</text>
            </a>

            <div className="back-button-todo">
                <a href="/" id="backTodo">VOLTAR</a>
            </div>
            <footer className="footer">
              ©CyberOrc
            </footer>
        </div>
    </div>
  );
}

export default Lista;