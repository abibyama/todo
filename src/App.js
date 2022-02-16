import { useState } from 'react';
import './App.css';
import Todo from './Todo';
function App() {
  const [id, setId] = useState(0)
  const incrementCounter = () => {
    setId((previousValue) => previousValue + 1)
  }
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    const newTodo = {
      id: id,
      title, 
      description: 'Ha en bra dag!'
    }
    setTodos([...todos, newTodo])
    incrementCounter()
  }
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todos) => todos.id !==id)
    setTodos(filteredTodos)
  }
  return (
    <div>
      <div style={{display: 'flex'}}>
        <label><input value={title} onChange={(event) => {
          console.log(event.target.value)
          setTitle(event.target.value)
        }} /></label>
        <label><input onChange={() => {

        }} /></label>
        <button onClick={addTodo}>ADD TODO</button>
    </div>
      {todos.map(({id, titel, description}) => {
      return <Todo key={id} id = {id} title={title} description = {description} onDelete = {deleteTodo} />
      })}
    </div>
  );
}

export default App;
