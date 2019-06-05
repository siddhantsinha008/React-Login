import React,{Component} from 'react';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer'
// import Welcome from './components/Welcome/Welcome'
import Routes from './routes';
// import Login from './components/Login/Login'
// import Signup from './components/Signup/Signup'
import './styles/foundation.min.css';
import './styles/custom.css';


class App extends Component {
  state={appName:'Login Project'}
  render(){
  return (
    <div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

<div className="off-canvas-content" data-off-canvas-content>

<MobileHeader name={this.state.appName}/>
<Header name={this.state.appName}/>
<Routes />
{/* <Welcome /> */}

<hr />
<Footer />
</div>
</div>
</div>
  );
}
}
export default App;
