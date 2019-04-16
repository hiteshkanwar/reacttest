import React, { Component } from 'react';
import {Link} from 'react-router-dom';
let totalAmout

const Header = (props) =>{
  const userLogged = (localStorage.getItem('user'))
  const cartCount = props.cart && props.cart.length 
  totalAmout = 0
  totalAmout = props.cart &&  props.cart.map((c)=> { return totalAmout = totalAmout +  parseInt(c.subtotal) })
  totalAmout =  props.cart ?  totalAmout[cartCount -1] : 0
  return (
    
    <header className="container-fluid header">    
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
    </header>
  )
};

export default Header;