import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import { login } from '../../actions/users';

class Login  extends Component {

  constructor(props) {
    super(props);
     this.state = {
      email: "",
      password: "",
      error: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    if (!email)
    {
      this.setState({error: 'The email and password can not be empty' }) 
      return false
    }
    if (!password)
    {
      this.setState({error: 'The email can not be empty' }) 
      return false
    }
    this.props.login(email, password)
  }
  
  render(){
    return(
      <div className="container-fluid">
        <ReactModal 
          isOpen={this.props.login}
          contentLabel="Minimal Modal Example"
          className="modal-dialog"
          >
          <div className="modal-content login-modal">
            <div className="modal-header">
              <button className="close" onClick={this.props.closeLoginModal}>
                <i class="far fa-times-circle"></i>
              </button>
            </div>
            <div className="modal-body">
              <h4 className="modal-title">Sign in</h4>
              <h6 className="modal-sub-title">* All Fields Are Required</h6>
              <form className='user' onSubmit={this.handleSubmit}>
                { this.state.error && <p className='add-option-error'> {this.state.error} </p>}
                <div className="form-group">
                  <input type="text" name="email" placeholder="Email *" className='add-option-input form-control'/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password *" name="password" className='add-option-input form-control'/>
                </div>
                <div className="modal-footer text-center">
                  <button type="submit" className='button btn btn-danger'>Sign In</button> 
                  <p>Don't have an account? <a href="#">Register</a></p>
                </div>
              </form>
            </div>

          </div>
        </ReactModal>
      </div>
    )
  }
}


export default Login = connect(null,
  {
    login,
  })
  (Login);
