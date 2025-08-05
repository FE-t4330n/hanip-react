const Controller = ({ count, setCount }) => {
    return (
        <div>
            <button
                onClick={() => {
                    count -= 1;
                    setCount(count);
                }}
            >
                -1
            </button>
            <button
                onClick={() => {
                    count -= 10;
                    setCount(count);
                }}
            >
                -10
            </button>
            <button
                onClick={() => {
                    count -= 100;
                    setCount(count);
                }}
            >
                -100
            </button>
            <button
                onClick={() => {
                    count += 100;
                    setCount(count);
                }}
            >
                +100
            </button>
            <button
                onClick={() => {
                    count += 10;
                    setCount(count);
                }}
            >
                +10
            </button>
            <button
                onClick={() => {
                    count += 1;
                    setCount(count);
                }}
            >
                +1
            </button>
        </div>
    );
};

export default Controller;
