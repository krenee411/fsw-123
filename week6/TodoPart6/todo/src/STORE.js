import {v4 as uuidv4} from 'uuid';

export const Todos =
[
    {text: "Walk the Dog", id: uuidv4(), isComplete: false},
    {text: "Pick up kids from soccer practice 1700",  id: uuidv4(), isComplete: false},
    {text: "Drop package off at Post Office", id: uuidv4(), isComplete: false},
    {text: "Bring dog to groomers 1600",  id: uuidv4(), isComplete: false},
    {text: "Call repair man",  id: uuidv4(), isComplete: false}
]

console.log(Todos)
