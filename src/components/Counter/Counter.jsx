import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [plus, setPlus] = useState(0)
    const [minus, setMinus] = useState(10)

    const handlePlus = () => {
        setPlus((plus + 1))
    }
    const handleMinus = () => {
        setMinus((minus - 1))
    }
  const checking = useMemo(() =>{
console.log("Checking");

    return plus % 2 === 0;
  })
    return (
        <div >
            <h1> {checking() ? "Even" : "Odd"} </h1>
            <button onClick={handlePlus} className='m-10'>  Increment  :   {plus} </button>
            <hr />
            <br />
            <button onClick={handleMinus} >  Decrement : {minus} </button>

        </div>
    )
}

export default Counter