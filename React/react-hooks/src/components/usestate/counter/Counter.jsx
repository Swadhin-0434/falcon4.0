import React, { useState } from 'react'

const counter = () => {
    // let count =0; in javascript
    // function setCount(){
    //     return count;
    // }
    // setCount() //function call
    const [count, setCount] = useState(0);


    function add(){
        if(count === 10){
            setCount(10);
        }else{
            setCount((prev) => prev + 1);
        }
        
    }

    function reduce(){
        if(count === 0){
            setCount(0);
        }else {
            setCount((prev) => prev - 1);
        }
        
    }
  return (
    <div>
        <h1>Here the counter value is:{count}</h1>
        <button onClick={add}>Add</button>
        <button onClick={reduce}>Reduce</button>
    </div>
  )
}

export default counter