import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {Route,NavLink,HashRouter} from 'react-router-dom'

 

export class HelloWorld extends Component {

  render() {

    return (
      
      <div>
       
          <h1>Simple work lab</h1>


      </div>
     

    );

  }

}
export default hot(module)(HelloWorld)