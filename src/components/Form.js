import React from "react";
import './form.css'
import {FaPlus} from "react-icons/fa";

function Form ({setInputText,inputText,todos,setTodos,setStatus}){

const textHandler=(e)=>{
    setInputText(e.target.value)
}

const submitHandler=(e)=>{
    setTodos([...todos,{text:inputText,completed:false,id:Math.random()}]);
    setInputText("")
     e.preventDefault();
}

const statusHandler=(e)=>{
    setStatus(e.target.value);
}

        return(
            <form>
                <input onChange={textHandler} value={inputText} type="text"/>
                <button onClick={submitHandler} type="submit"><FaPlus className={'addIcon'}/> </button>
                <select className={'custom-select'} name="todos" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </form>
        )
}


export default Form;