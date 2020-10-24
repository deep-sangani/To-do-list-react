import React from 'react'

export default function Form({setinput,setlist,list,input,setstatus}) {

const listhender = (e)=>{
 e.preventDefault()
 
setlist([...list,{text:input,id:(Math.random()+1)*10,completed:false}])
setinput("")

} 
const inputhendler =(value)=>{
  setinput(value)

}

const statushendler = (e)=>{
setstatus(e.target.value)
}

    return (
        <div>
            <form>
              <div className="wraper">
              <input type="text" value={input}  className="todo-input" onChange={(e)=>{inputhendler(e.target.value)}} />
      <button className="todo-button" onClick={(e)=>listhender(e)}>
        <i className="fas fa-plus-square"></i>
      </button>
      </div>
      <div className="select">
        <select name="todos"  onChange={statushendler}      className="filter-todo"> 
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}
