import React, {useState} from "react";
import './App.css';
import TodoForm from "./TodoForm";

function App() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>ToDo app in Reactjs</p>
                <TodoForm addTodo={addTodo}/>
            </header>
        </div>
    );
}

export default App;
