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
    console.log(222,name)
    console.log(222,email)
    console.log(222,password)
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
    console.log(44,this.props)
    return(
        <div className="container-fluid">
        <ReactModal 
           isOpen={this.props.register}
           contentLabel="Minimal Modal Example"
        >
         <button onClick={this.props.closeRegisterModal}>Close Modal</button>
          <form className='user' onSubmit={this.handleSubmit}>
          { this.state.error && <p className='add-option-error'> {this.state.error} </p>}
           <input type="text" name="name" className='add-option-input'/>
           <input type="text" name="email" className='add-option-input'/>
           <input type="password" name="password" className='add-option-input'/>
           <button className='button'>Sign Up</button> 
         </form>
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
