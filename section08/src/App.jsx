import './App.css';
import Today from './components/Today';
import AddToDo from './components/AddTodo';

function App() {
    return (
        <>
            <h2>오늘은 📅</h2>
            <h1>
                <Today />
            </h1>
            <AddToDo />
        </>
    );
}

export default App;
