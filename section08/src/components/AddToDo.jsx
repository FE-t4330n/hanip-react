import { useState } from 'react';
import ToDoList from './ToDoList';

const AddToDo = () => {
    const [input, setInput] = useState('');

    const [todoList, setToDoList] = useState([]);
    console.log(todoList);

    const onChange = (e) => {
        setInput(e.target.value);
    };
    const onClick = () => {
        setToDoList([...todoList, input]);
        setInput('');
    };

    return (
        <div>
            <input value={input} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <h3>Todo List 🌱</h3>
            <ToDoList todoList={todoList} setToDoList={setToDoList} />
        </div>
    );
};

export default AddToDo;
