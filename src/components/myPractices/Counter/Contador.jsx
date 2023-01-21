import React, { useState } from 'react'
import { Button, Toast } from 'react-bootstrap'

export const Contador = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter);
    
    //handles//
    let handleIncrease = () =>{
        setCounter(counter + 1);
    };
    let handleDecrease= () =>{
        if(counter > 0){
            setCounter(counter -1);
        }
        
    }
  return (
    
    <div>
        <Toast.Body className='d-flex justify-content-center gap-3'>
            <Button onClick={handleIncrease}>+</Button>
            <div style={{fontSize:'25px'}} > {counter} </div>
            <Button onClick={handleDecrease}>-</Button>
        </Toast.Body>
    </div>
  )
  
}
