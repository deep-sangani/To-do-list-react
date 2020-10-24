import React, { useState,useEffect } from 'react';

import './App.css';
import Form from './componants/Form';
import Todolist from './componants/Todolist';


function App() {


  const [input,setinput] = useState('')
  const [list,setlist] = useState([])
  const [status,setstatus] = useState("All");
  const [filterlist,setfilterlist] = useState([])

  useEffect(() => {
    getlocal()
    
    
  }, [])
  useEffect(() => {
  statushandler()
  savelocal()
   
  },[list,status])

 const statushandler = ()=>{
   switch(status){
     case 'completed':{
       setfilterlist(list.filter(todo=>todo.completed === true))
       break
     }
     case 'uncompleted':{
      setfilterlist(list.filter(todo=>todo.completed === false))
      break
    }
    default:setfilterlist(list)
    break
   }
 }

 // save local todos
 const savelocal = ()=>{
  
     localStorage.setItem("todos",JSON.stringify(list))
   
 }


 const getlocal = ()=>{
  if(localStorage.getItem("todos")==null){
    localStorage.setItem("todos",JSON.stringify([]))
  }else{
   let todolocal = JSON.parse(localStorage.getItem("todos"))
   setlist(todolocal)
  }
}






  return (
    <div className="App">
      <header>
  <h1>Deep's To-do list</h1>
      </header>
     <Form setinput={setinput} setlist={setlist} list={list} input={input} setstatus={setstatus}/>
     <Todolist list={list} filterlist={filterlist} setlist={setlist} />
    </div>
  );
}

export default App;
