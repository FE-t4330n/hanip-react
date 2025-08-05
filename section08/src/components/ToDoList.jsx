import { useState } from 'react';

const ToDoList = ({ todoList, setToDoList }) => {
    const onDelete = (e) => {
        setToDoList(
            todoList.filter((todo, idx) => {
                console.log(idx, Number(e.target.value));
                return idx !== Number(e.target.value);
            })
        );
    };
    return (
        <>
            {todoList.map((todo, idx) => (
                <div value={idx}>
                    <input type="checkbox"></input>
                    <div key={idx}>{todo}</div>
                    <div>
                        {new Date()
                            .toISOString()
                            .slice(0, 10)
                            .replace(/-/g, '.')}
                    </div>
                    <button value={idx} onClick={onDelete}>
                        삭제
                    </button>
                </div>
            ))}
            {console.log()}
        </>
    );
};

export default ToDoList;
