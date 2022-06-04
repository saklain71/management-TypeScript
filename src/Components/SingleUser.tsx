import React, { FC } from 'react';

interface Props{
    name:string,
    age: number,
    addUser: () => void

    }

    
// FC<{name: string, age?: number}> = (props)
const SingleUser: FC<Props> = ({name, age, addUser}) => {
    
    return (
        <div>
            <h2>Hello from: {name} with experience {age} years</h2>
            <button onClick={addUser}>add me</button>
        </div>
    );
};

export default SingleUser;