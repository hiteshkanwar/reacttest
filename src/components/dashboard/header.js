import React, { Component } from 'react';
import {Link} from 'react-router-dom';
let totalAmout

const Header = (props) =>{
  const userLogged = (localStorage.getItem('user'))
  const userName = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).user.name
  const cartCount = props.cart && props.cart.length 
  totalAmout = 0
  totalAmout = props.cart &&  props.cart.map((c)=> { return totalAmout = totalAmout +  parseInt(c.subtotal) })
  totalAmout =  props.cart ?  totalAmout[cartCount -1] : 0
  return (
    
    <header className="">
      <div className="container-fluid top-bar">
        <div className="row">
          <div className="col-md-3">
            <div className="user-login">
              {!userLogged ?
                <h4 className="top-menu-item">
                  Hi! <a className="" href="#" onClick={()=>props.loginClick()}>Login</a>
                  or <a className="" href="#" onClick={()=>props.registerClick()}>Register</a>
                </h4>
                /*<ul className="navbar-nav mr-auto">
                  <li className="nav-item active" >
                    <a className="nav-link" href="#" onClick={()=>this.loginClick()}>Login</a>
                  </li>
                  <li className="nav-item " >
                    <a className="nav-link" href="#" onClick={()=>this.registerClick()}>Register</a>
                  </li> 
                </ul>*/
                :
                <ul className="navbar-nav">
                  <li className="nav-item dropdown user-login-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {userName}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/cart"><i className="fas fa-shopping-bag"></i> My Bag</Link>
                      <a className="dropdown-item" href="#"><i className="far fa-user-circle"></i> My Profile</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
                    </div>
                  </li>
                  {/*<li className="nav-item active" >
                    <a className="nav-link" href="#">My Bag</a>
                  </li>
                  <li className="nav-item " >
                    <a className="nav-link" href="#">My Profile</a>
                  </li> 
                  <li className="nav-item " >
                    <a className="nav-link" href="#">Logout</a>
                  </li>*/}
                </ul>
              }  
            </div>
          </div>
          <div className="col-md-6">
            <div className="navbar navbar-expand-lg">
              <ul className="navbar-nav ml-auto text-center">
                { props.departments && props.departments.map((department, index) => (
                  <li className="nav-item active" key={index}>
                    <a className="nav-link" href="#"  onClick={() => this.departmentClick(department.department_id)}>{department.name}</a>
                  </li>
                ))} 
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="shop-cart">
              <h4 className="top-menu-item">
                <i class="fas fa-shopping-bag"></i> Your Bag:
                <Link className="" to="/cart">${totalAmout} {cartCount}</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
              <img src={'../../../public/assets/images/logo.png'} class="img-fluid logo"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          {/*<div className="navbar-collapse collapse">
                        {!userLogged ?
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" >
                              <a className="nav-link" href="#" onClick={()=>props.loginClick()}>Login</a>
                            </li>
                            <li className="nav-item " >
                              <a className="nav-link" href="#" onClick={()=>props.registerClick()}>Register</a>
                            </li> 
                          </ul>
                          :
                          <ul className="navbar-nav">
                            <li className="nav-item active" >
                              <a className="nav-link" href="#">My Bag</a>
                            </li>
                          <li className="nav-item " >
                            <a className="nav-link" href="#">My Profile</a>
                          </li> 
                          <li className="nav-item " >
                            <a className="nav-link" href="#">Logout</a>
                          </li> 
                          </ul>
                        }  
                    
                  </div>*/}
           <div className="navbar-collapse collapse">
              <ul className="navbar-nav ml-auto text-center">
                { props.departments && props.departments.map((department, index) => (
                  <li className="nav-item active" key={index} >
                    <a className="nav-link" href="#"  onClick={() => props.departmentClick(department.department_id)}>{department.name}</a>
                  </li>
                ))} 
              </ul>
          </div>

          {/*<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item " >
                <Link className="nav-link" to="/cart">Cart ${totalAmout} {cartCount}</Link>
              </li> 
           </ul>
          </div>*/}
          <div className="">
            <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" onChange={(e) => props.searchByName(e)} type="search" placeholder="Search" aria-label="Search"/>
             {/*<button type="button" className="btn btn-outline-success my-2 my-sm-0" >Search</button>*/}
             <button class="btn btn-search my-2 my-sm-0" type="button" onClick={() => props.searchClick(props.searchQuery)} >
              <i class="fas fa-search"></i>
            </button>
           </form>
         </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;