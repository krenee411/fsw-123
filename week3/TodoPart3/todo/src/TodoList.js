import Todo from "./Todo";

export default function TodoList(props){
    return(
        props.text.map((e) => {
            return(
                <Todo 
                    key = {e._id}
                    text = {e.text}
                    completed = {props.completed}
                    deleted = {props.deleted}
                 />
            )   
        })
    )
    
}
