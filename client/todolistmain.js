import React from 'react'
import { hot } from 'react-hot-loader'
import ToDoItems from './todoitems.js'
//import './style.css'

 export class Todolistmain extends React.Component

 {
     constructor(props)
     {
         super(props);
         this.state={
             items:[]
         };
         this.addItem=this.addItem.bind(this);
         this.deleteItem=this.deleteItem.bind(this);
         

     }
     addItem(e)
     {
        if(this._inputElement!=="")
        {
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            }
            this.setState((prevState)=>{
                return {
                    items:prevState.items.concat(newItem)
                };
            });
            this._inputElement.value="";
        }
        console.log(this.state.items);
        e.preventDefault();
     }
     deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
        this.setState({
          items: filteredItems
        });
      }
     render()
     {
         return (
             <div className="todolistmain" >

                <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement=a} placeholder="enter the task">
                    </input>
                    
                    <button type="submit">add</button>
                </form>
                </div>
                <ToDoItems entries={this.state.items}  delete={this.deleteItem}/>

             </div>
         );
     }
 }

 export default hot(module)(Todolistmain)