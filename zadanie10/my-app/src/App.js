import React from 'react';
import ToDoList from './ToDoList';
import NewTask from './NewTask';
import Filter from './Filter';

class App extends React.Component{
constructor() {
    super()
    this.state = {
        tasks: [],
        filter: false,
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.filtrHandler = this.filtrHandler.bind(this)
    this.pushingHandler   = this.pushingHandler.bind(this)
  }

  filtrHandler(){
    this.setState(prevState =>{
        return {
            ...prevState,
            filter: !prevState.filter,
        }
    })
  }

  pushingHandler(task){
    this.setState(prevState =>{
        return {
            ...prevState,
            tasks: [...prevState.tasks, task],
        }
    })
  }

  changeHandler(id) {
    this.setState(prevState =>{
        const newTasks = prevState.tasks.map( task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            }
        )
        return {
            ...prevState,
            tasks: newTasks,
        }
    })
  }

  render(){
      return(
        <div className="main-container">
          <Filter filtrHandler={this.filtrHandler}/>
          <ToDoList tasks={this.state.tasks} changeHandler={this.changeHandler} filterOn={this.state.filter}/>
          <NewTask pushingHandler={this.pushingHandler}/>
        </div>
      )
    }
}

export default App;
