import React from "react"
import Task from "./Task"

function ToDoList(props){
    const taskList = props.tasks.map(
        task => <Task key={task.id} task={task} filterOn={props.filterOn} changeHandler={props.changeHandler}/>
    )

    if(props.tasks.length)
        return <div className="underlined">{taskList}</div>
    else
        return <div className="underlined">Todo list is empty</div>

}

export default ToDoList
