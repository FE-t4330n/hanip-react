import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center' }}>
            <div>Simple Counter</div>
            <Viewer count={count} />
            <Controller count={count} setCount={setCount} />
        </div>
    );
}

export default App;
