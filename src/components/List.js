import React from "react";
import Todo from "./Todo";
import './list.css';

function  List({todos,setTodos,ftodos}){

        return(
            <div className="todo-list">
                {ftodos.map(todo =>(
                    <Todo   
                    todos={todos}
                     setTodos={setTodos} 
                     key={todo.id}
                     todo={todo} 
                     text={todo.text}/>
                )) }

            </div>
        )
    
}

export default List;