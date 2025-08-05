import { useRef } from 'react';

const ToDoList = ({ todoList, setToDoList }) => {
    const onDelete = (e) => {
        setToDoList(
            todoList.filter((todo, idx) => {
                console.log(`e: ${e.target.value}`);
                return idx !== Number(e.target.value);
            })
        );
    };
    return (
        <>
            {todoList
                .slice()
                .reverse()
                .map((todo, idx) => (
                    <div>
                        <input type="checkbox"></input>
                        <div>{todo}</div>
                        <div>
                            {new Date()
                                .toISOString()
                                .slice(0, 10)
                                .replace(/-/g, '.')}
                        </div>
                        <button
                            value={todoList.length - idx - 1}
                            onClick={onDelete}
                        >
                            삭제
                        </button>
                    </div>
                ))}
        </>
    );
};

export default ToDoList;
