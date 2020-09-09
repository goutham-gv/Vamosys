import React, { Component } from 'react';
import { render } from 'react-dom';
import Hero from './Hero';
import firebaseApp from './config.js';
import './App.css';
 


class AuthForm extends Component {
  state = {
    user: null,
    errorMessage: '',
    errorCode: '',
    displayLogin: false,
  }

  componentWillMount(){
      console.log(this.props.history)
    firebaseApp.auth().onAuthStateChanged( user => {
      console.log(user)
      if(user){
        this.props.history.push('/user')
        console.log('You are logged in');
        this.setState({ user })
      }else {
        console.log('You are NOT logged in')
      }
    } )
  }

  submitSignUp = e => {
      e.preventDefault();
      let email = this.emailInput.value, password = this.passwordInput.value
      firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({errorMessage})
      });
  }

    submitSignIn = e => {
      e.preventDefault();
      let email = this.emailInputLogin.value, password = this.passwordInputLogin.value
      firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({errorMessage, errorCode})

        this.props.history.push('/user')
        
      });
  }




  render() {
    let { displayLogin, errorMessage, errorCode } = this.state;
    return (
      <div>
          <div className="loginContainer">
            <div style={{display: displayLogin ? 'none' : 'block'}}>
              <form onSubmit={this.submitSignUp}>

              <label>Username</label>
              <input
                 type="text"
                 autoFocus 
                 required 
                 ref={el => this.emailInput = el} />

                 <label>password</label>
                 <input
                 type="password" 
                 required
                 ref={el => this.passwordInput = el} />
                <div className="btnContainer">
                <button type="submit">Sign Up</button> 
                </div>
              </form>
              <span style={{fontSize: '15px', color: 'red'}}>{errorMessage}</span>
                <p>Have an account ? <span onClick={e=>{this.setState({displayLogin: true})}} style={{color: 'yellow', fontSize: '15px', cursor: 'pointer'}}>Sign in</span></p>
            </div>
            
          <form style={{display: displayLogin ? 'block' : 'none'}} onSubmit={this.submitSignIn}>
          <label>Username</label>
              <input
                 type="text"
                 autoFocus 
                 required ref={el => this.emailInputLogin = el} />
            <label>password</label>
                 <input
                 type="password" 
                 required ref={el => this.passwordInputLogin = el} />
            <div className="btnContainer">
                <button type="submit">Sign in</button> 
                </div>
          </form>
          <span style={{fontSize: '15px', color: 'red', display: 'block'}}>{errorMessage}</span>
          {errorCode&&(
            <button onClick={e=>this.setState({ displayLogin: false, errorCode: '', errorMessage: '' })}>Sign Up</button>)} 
          </div>
          )
        
      </div>
    );
  }
}

export default AuthForm;
