import React from "react"
import ToDo from "./ToDo"

export const ToDoList=({toDoList,handleToggle,handleFilter})=>{
    return(
        <div>
        {
            toDoList.map((todo)=>{
                return(
                    <div>
                    <ul>
                    <li>
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                
                    </li>

                    </ul>
                    </div>
                    
                    )
            })
        }
        <button className="btn_clr" onClick={handleFilter}>Clear Completed</button>
        </div>
    )

}