import React, { useMemo, useState } from 'react'

const Counter = () => {
    // ================ useState Hook============

    const [plus, setPlus] = useState(0);
    const [minus, setMinus] = useState(10);
  
    // ================ Functions============
    const handlePlus = () => {
        setPlus((plus + 1));
    }
    const handleMinus = () => {
        setMinus((minus - 1));
    }
    // ================ useMemo Hook============
    const checking = useMemo(() => {
        console.log("For Cheacking");
        return plus % 2 === 0;
    }, [plus]);

    return (
        <div >
            <h1> {checking ? "Even" : "Odd"} </h1>
            <button onClick={handlePlus} className='m-10'>  Increment  :   {plus} </button>
            <hr />
            <br />
            <button onClick={handleMinus} >  Decrement : {minus} </button>

        </div>
    )
}

export default Counter