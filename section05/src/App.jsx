import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Bulb />
            <Counter />
        </>
    );
}

export default App;
