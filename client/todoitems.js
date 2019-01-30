import React,{Component} from 'react'
import { hot} from 'react-hot-loader'

export class ToDoItems extends Component
{
    constructor(props) {
        super(props);
       this.createTasks = this.createTasks.bind(this);
      }
    delete(key)
    {
        this.props.delete(key);
    }
    createTasks(item)
    {
        return <li key={this.key} onClick={()=>this.delete(item.key)} >{item.text}</li>
    }
    render()
    {
     var todoentries=this.props.entries;
     var listItems=todoentries.map(this.createTasks);
     return (
         <ul className="thelist">
         {listItems}</ul>
     )
        
      
    }
}

export default ToDoItems;