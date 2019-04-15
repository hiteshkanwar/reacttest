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

  componentWillReceiveProps(nextProps){
    if(nextProps.user && nextProps.user.error){
      this.setState({error: nextProps.user.error})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    if (!email || !password)
    {
      this.setState({error: 'The email and password can not be empty' }) 
      return false
    }
    this.props.login(email, password)

  }
  
  render(){
    console.log(44,this.props)
    return(
        <div className="container-fluid">
        <ReactModal 
           isOpen={this.props.login}
           contentLabel="Minimal Modal Example"
        >
         <button onClick={this.props.closeLoginModal}>Close Modal</button>
          <form className='user' onSubmit={this.handleSubmit}>
          { this.state.error && <p className='add-option-error'> {this.state.error} </p>}
           <input type="text" name="email" className='add-option-input'/>
           <input type="password" name="password" className='add-option-input'/>
           <button className='button'>Sign In</button> 
         </form>
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
  }
}


export default Login = connect(mapStateToProps,
  {
    login,
  })
  (Login);