import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import axios from 'axios'

function TodoList() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://api-crud-todo-orc.herokuapp.com/')
      .then(function (response) {
        // handle success
        console.log(response);
        setTodos(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    axios.post('https://api-crud-todo-orc.herokuapp.com/', {
      nome: todo.text
    }).then(function (response) {
      // handle success
      console.log(response);

      const newTodos = [response.data, ...todos]

      setTodos(newTodos)

      // setTodos(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    axios.put(`https://api-crud-todo-orc.herokuapp.com/${todoId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setTodos(prev => prev.map(item => (item._id === todoId ? response.data[0].nome : item)))
        // setTodos(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  const removeTodo = id => {

    axios.delete(`https://api-crud-todo-orc.herokuapp.com/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);

        const removeArr = [...todos].filter(todo => todo._id !== id)

        setTodos(removeArr)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  const completeTodo = (id, isCompleteParam) => {
    console.log(id, isCompleteParam);
    axios.put(`https://api-crud-todo-orc.herokuapp.com/iscomplete/${id}`, {isComplete : !isCompleteParam})
      .then(function (response) {
        // handle success
        console.log(response);

        let updatedTodos = todos.map(todo => {
          if (todo._id === id) {
            todo.isComplete = response.data.isComplete
          }
          return todo
        })
        setTodos(updatedTodos)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div>
      <h1>Tarefas do Dia</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList