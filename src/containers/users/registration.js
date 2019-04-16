import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import { register } from '../../actions/users';

class Registration  extends Component {

  constructor(props) {
    super(props);
     this.state = {
      name: "",
      email: "",
      password: "",
      error: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    if(!name)
    {
      this.setState({error: 'Name can not be empty' }) 
      return false
    }
    if (!email)
    {
      this.setState({error: 'The email and password can not be empty' }) 
      return false
    }
    if (!password)
    {
      this.setState({error: 'The password can not be empty' }) 
      return false
    }
    this.props.register(name, email, password)
  
  }
  
  render(){
    return(
        <div className="container-fluid">
        <ReactModal 
           isOpen={this.props.register}
           contentLabel="Minimal Modal Example"
           className="modal-dialog"
        >

        <div className="modal-content login-modal">
          <div className="modal-header">
            <button className="close" onClick={this.props.closeRegisterModal}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>

          <div className="modal-body">
            <h4 class="modal-title">Register</h4>
            <h6 class="modal-sub-title">* All Fields Are Required</h6>
            <form className='user' onSubmit={this.handleSubmit}>
              { this.state.error && <p className='add-option-error'> {this.state.error} </p>}
              <div className="form-group">
                <input type="text" name="name" className='add-option-input form-control' placeholder="Name *"/>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email *" name="email" className='add-option-input form-control'/>
              </div>
              <div className="row">
                <div className="form-group col-sm-6 mb-0">
                  <input type="password" placeholder="Password *" name="password" className='add-option-input form-control'/>
                </div>
                <div className="form-group col-sm-6">
                  <input type="password" placeholder="Confirm Password" name="password" className='add-option-input form-control'/>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer text-center">
            <button className='button btn btn-danger'>Sign Up</button>
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </div>
        </ReactModal>
      </div>
    )
  }
}


export default Registration = connect(null,
  {
    register,
  })
  (Registration);