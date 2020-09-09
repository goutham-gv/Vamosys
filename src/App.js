import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {BrowserRouter} from 'react-router-dom';

import Hero from './Hero';
import AuthForm from './authform'

class App extends Component {
  

  

  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/user' component={Hero}/>
          <Route path='/' component={AuthForm}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('root'));


export default App;
