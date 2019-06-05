import React,{Component} from 'react';
import './Welcome';

class Welcome extends Component{
  render(){
  return (
    <div className="row small-up-2 medium-up-3 large-up-4">
    <div className="column">
    
    <h3>Welcome Page</h3>
    <a href='/login' class='button'>LOGIN</a>
    <a href='/signup' class='button success'>SIGNUP</a>
    </div>
    </div> 
  );}
}

export default Welcome;
