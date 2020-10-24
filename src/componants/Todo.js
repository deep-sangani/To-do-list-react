import React from 'react'

export default function Todo({text,setlist,list,todo}) {
//events
const deletehandler =(e)=>{
setlist(list.filter(el=>el.id !== todo.id))
}


const completehandler =(e)=>{
    setlist(list.map(item=>{
        if(item.id === todo.id){
            return{
                ...item,completed:!item.completed
            }
        }
        return item
    })
    )
    }
    

    
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ?"completed":""}`}>{text}</li>
            <button className="complete-btn"  onClick={()=>completehandler()}><i className="fas fa-check"></i></button>
            <button onClick={()=>deletehandler()} className="trash-btn"><i className="fas fa-trash" ></i></button>
        </div>
    )
}
