import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import User from './Components/User';

let student: string = 'jolly';
let age: number = 33;
let isBolean: boolean = false;

let students: string[] = ['joe', 'Baidem', 'Harry']
let fees: number[] = [ 2, 3, 5,6]


interface Person{
  name: string,
  job?: string,
  age: number,
  employed: string | boolean
  location?: string | number
}

const person: Person = {
name: "Saklain",
job: "Software Engineer",
age: 2,
employed: true,
location: 44
}

const handleAddUser = (firstName: string, age: number, address: string):number =>{

  const total: number = 50;
  console.log(firstName, age, address);
  return total;

}

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <User></User>
    </div>
  );
}

export default App;
