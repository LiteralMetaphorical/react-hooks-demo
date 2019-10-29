import React, { useState } from 'react';
import './App.css';


// APP COMPONENT
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn about react',
      isCompleted: false
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'build cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            key={index} index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


// TODO COMPONENT
function Todo({ todo, index, completeTodo, deleteTodo }) {
  return(
    <div style={{textDecoration: todo.isCompleted ? "line-through" : "none"}} className="todo">
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  );
}


//TODO FROM COMPONENT
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add new todo"
        type="text" className="input"
        value={value}
        onChange={e => setValue(e.target.value)}/>
    </form>
  );
}

export default App;
