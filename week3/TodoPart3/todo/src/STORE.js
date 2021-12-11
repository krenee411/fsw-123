import {v4 as uuidv4} from 'uuid';

export const Todos =
[
    {text: "Walk the Dog", _id: uuidv4(), isComplete: false},
    {text: "Pick up kids from soccer practice 1700",  _id: uuidv4(), isComplete: false},
    {text: "Drop package off at Post Office", _id: uuidv4(), isComplete: false},
    {text: "Bring dog to groomers 1600",  _id: uuidv4(), isComplete: false},
    {text: "Call repair man",  _id: uuidv4(), isComplete: false}
]

console.log(Todos)




