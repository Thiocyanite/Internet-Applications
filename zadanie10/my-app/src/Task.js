import React, { Component } from 'react';

function Task(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        display: "inline",
    }
    const usualStyle = {
        display: "inline",
    }
    const hiddenStyle = {
        display:"none",
    }

    return(
        <div style={props.filterOn && props.task.completed ? hiddenStyle : null}>
            <input 
                type="checkbox"
                checked={props.task.completed}
                onChange={() => props.changeHandler(props.task.id)}
            />
            <p style={props.task.completed? completedStyle: usualStyle}>
                {props.task.text}
            </p>
        </div>
    )
}


export default Task;
