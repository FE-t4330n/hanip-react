const Today = () => {
    const today = new Date().toString().slice(0, 15);

    return <div>{today}</div>;
};

export default Today;
