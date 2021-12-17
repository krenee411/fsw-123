import Todo from "./Todo";

export default function TodoList(props){
    return(
        props.todos.map((e) => {
            return(
                <Todo 
                    key = {e.id}
                    text = {e}
                    completed = {props.completed}
                    deleted = {props.deleted}
                 />
            )   
        })
    )
    
}
