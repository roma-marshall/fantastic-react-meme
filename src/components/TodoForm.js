import React, {useState} from "react";

function TodoForm() {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    return (
        <form action="">
            <input/>
            <button/>
        </form>
    );
}

export default TodoForm;