import React from 'react';

function NewTask(props){
        if(typeof NewTask.counter == 'undefined'){
            NewTask.counter = 0;
        }

        const addTask = () => {
            let taskName = document.getElementById('task-name').value
            if( taskName ){
                let newTask = {
                    id: NewTask.counter++,
                    text: taskName,
                    completed: false,
                }
                document.getElementById('task-name').value = ""
                props.pushingHandler(newTask)
            }
        }

        return(
            <div>
                <input
                    id="task-name"
                    type="text"
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            addTask()
                        }
                      }}

                />
                <input
                    type="button"
                    value="Add"
                    onClick={()=> addTask()}
                />
            </div>
        )
}
export default NewTask;
