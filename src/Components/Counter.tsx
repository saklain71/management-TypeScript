import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {

    interface User {
        name: string,
        age: number
    }
    const [counter, setCounter] = useState(0);
    const [ user , setUser] = useState<User | null>(null);

    const handeIncrease = ():void =>{
        setCounter(counter + 1);
    }
    const handleUserSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const userData = {
            name : ' saklin',
            age : 26
        }
        setUser(userData)

    }
    const handeNameChange  = (e:ChangeEvent<HTMLInputElement> ):void =>{

    }
    
    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handeIncrease}>Increase</button>
        </div>
    );
};

export default Counter;