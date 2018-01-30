import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Homepage from './components/Homepage.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
    this.toggleLogin = this.toggleLogin.bind(this)
  }
  toggleLogin () {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render () {
    return (
      <div style={{height:'100%'}}>
        <Header isLogin={this.state.isLogin} toggleLogin={this.toggleLogin}/>
        <Main isLogin={this.state.isLogin}/>
        {
        //Don't modify unless you're aaron
      /*<header className="nav"><span className='logo' style={{marginLeft:'10%'}}>Friend.ly</span><ul><li>Events</li><li>Profile</li></ul></header>
      <Homepage/>*/}
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));

