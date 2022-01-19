import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './components/app.css'
import Form from './components/Form';
import List from './components/List';

function App() {

  //States
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [ftodos,setFtodos]=useState([]);

useEffect( ()=>{
  getLocalTodos();
},[]);

  

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    
  },[todos,status]);

  //Functions

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFtodos(todos.filter(todo =>todo.completed))
        break;
        case 'uncompleted':
        setFtodos(todos.filter(todo =>!todo.completed))
        break;
        default:
          setFtodos(todos);
          break;
    }
  }

//Saving local
const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
}

const getLocalTodos=()=>{
  if(localStorage.getItem("todos")==null){
    localStorage.setItem("todos",JSON.stringify([]));
  }else{
   let todoLocal=JSON.parse(localStorage.getItem("todos"));
   setTodos(todoLocal);
  }
}
const d=new Date();
  
  return (
    <div className="App">
      <h1>To Do List </h1>
      <Form 
      setInputText={setInputText}
      inputText={inputText}
      todos={todos}
      setTodos={setTodos} 
      setStatus={setStatus} />

      <List ftodos={ftodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
