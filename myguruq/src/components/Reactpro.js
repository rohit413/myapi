import { useState, React, useEffect } from 'react';


function Reactpro() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("Rohit");


    function updateCount() {
        setCount(count + 1);
    }

    function updateEffect() {
        setData("Ram");

    }


    useEffect(() => {
        console.log('Hello data');
    }, [count])

    return (
        <>
            <h1>useState is count {count}</h1>
            <button onClick={updateCount} >Click me </button>
            <br /> <button onClick={updateEffect} >Update me </button>

        </>
    )
}

export default Reactpro