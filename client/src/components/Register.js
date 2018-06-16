import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',  
      username: '',
      password: '',
      email: '',
      userType: '',
      profileImage: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, username, password, email, userType, profileImage } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { firstName, lastName, username, password, email, userType, profileImage } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Firstname</label>
          <input class="form-control" placeholder="firstname" name="firstName" value={firstName} onChange={this.onChange} required/>
          
          <label for="inputEmail" class="sr-only">Lastname</label>
          <input class="form-control" placeholder="lasttname" name="lastName" value={lastName} onChange={this.onChange} required/>
          
          <label for="inputEmail" class="sr-only">Username</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          
          <label for="inputEmail" class="sr-only">Email</label>
          <input class="form-control" placeholder="email" name="email" value={email} onChange={this.onChange} />

          <label for="inputEmail" class="sr-only">UserType</label>
          <input class="form-control" placeholder="usertype" name="userType" value={userType} onChange={this.onChange} required/>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Create;