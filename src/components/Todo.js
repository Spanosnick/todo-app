import react from "react";
import './todo.css'
const Todo=({text, todo,todos,setTodos})=>{


    const deleteHandler=()=>{
       console.log(todo)
        setTodos(todos.filter((el)=>el.id !== todo.id ))
    };

    const completeHandler=()=>{
        setTodos(todos.map((t)=>{
            if (t.id === todo.id){
            return { ...t,completed:!t.completed}
            }return t;
        }))

    }



    return(
        <div className={`todocomp ${todo.completed?"completed":''}`}>
            <li className={`todo-item ${todo.completed?"completed":''}`} >{text}</li>
            <button onClick={completeHandler} className='checkbtn'>
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deleteHandler} className='trashbtn'> 
                <i className="fas fa-trash"></i>
            </button>

            
        </div>
    );
}
export default Todo;