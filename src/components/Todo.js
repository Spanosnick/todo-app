import './todo.css'
import {FaStar, FaHeart, FaTrash, FaCheck} from 'react-icons/fa';
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
            <h3 className={`todo-item ${todo.completed?"completed":''}`} >{text}</h3>
            <button onClick={completeHandler} className='checkbtn'>
               <FaCheck/>
            </button>

            <button onClick={deleteHandler} className='trashbtn'> 
                <FaTrash/>
            </button>

            
        </div>
    );
}
export default Todo;