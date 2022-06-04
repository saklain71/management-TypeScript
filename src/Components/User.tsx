import React from 'react';
import SingleUser from './SingleUser';
import TestUser from './TestUser';

const User = () => {
    const handleAddUser = (): void =>{

    }
    return (
        <div>
            <h1>User</h1>
            <SingleUser name="Saklain" age={26} addUser={handleAddUser}></SingleUser>
            <TestUser name="Mustak" age={26} ></TestUser>
        </div>
    );
};

export default User;