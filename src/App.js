import React, {useState} from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
      }
    ]);
    setInput("");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <form onSubmit={handleClick}>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
          />
          <input type="submit"/>
        </form>

        {todoList.map((item, index) => (
          <div item={item} key={item.id}>{item.task}</div>
        ))}
      </header>
    </div>
  );
}

export default App;


