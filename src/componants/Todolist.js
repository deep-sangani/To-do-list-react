import React from 'react'
import Todo from './Todo'

export default function Todolist({list,filterlist,setlist}) {
    return (
        <div>
           <div className="todo-container">
              <ul className="todo-list">
                  {
                      filterlist.map((todo)=>(
                          <Todo todo={todo} text={todo.text} list={list} setlist={setlist} key={todo.id}/>
                      ))
                  }
             
              </ul>
    
    </div> 
        </div>
    )
}
