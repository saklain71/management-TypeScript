import React, { FC } from 'react';

interface Info{
    name: string,
    age: number,
    job?: string
}
const TestUser: FC<Info> = ({name, age , job}) => {

    return (
        <div>
            <h1>This is: {name} doing before {age}</h1>
        </div>
    );
};

export default TestUser;