import React,{Component} from 'react';
import './Header';

class Header extends Component{
  render(){
  return (
        <div className="callout primary">
        <div className="row column">
        <h1>{this.props.name}</h1>
        {/* <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla.</p> */}
        </div>
        </div>
  );}
}

export default Header;
