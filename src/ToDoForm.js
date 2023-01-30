import React,{useState} from "react";
const ToDoForm =({addTask})=>{
    const [userInput,setUserInput]=useState('');
    const handleChange=(e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
        <input className="input" value={userInput} type="text"  required onChange={handleChange} placeholder="Enter task..."/>
        <button className="btn_add">Add</button>
        </form>
    );
};
export default ToDoForm;