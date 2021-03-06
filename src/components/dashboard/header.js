import React, { Component } from 'react';

const Header = (props) =>{
  const userLogged = (localStorage.getItem('user'))
  const cartCount = props.cart && props.cart.length 
  let totalAmout = 0
  totalAmout = props.cart &&  props.cart.map((c)=> { return totalAmout = totalAmout +  parseInt(c.subtotal) })
  totalAmout = totalAmout[cartCount -1]
  return (
    <div>    
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              { !userLogged ?
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active" >
                    <a className="nav-link" href="#" onClick={()=>props.loginClick()}>Login</a>
                  </li>
                  <li className="nav-item " >
                    <a className="nav-link" href="#" onClick={()=>props.registerClick()}>Register</a>
                  </li> 
                  </ul>
                :
                <ul className="navbar-nav mr-auto">
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
          
        </div>
         <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
            <ul className="navbar-nav ml-auto text-center">
              { props.departments && props.departments.map((department, index) => (
                <li className="nav-item active" key={index}>
                  <a className="nav-link" href="#"  onClick={() => props.departmentClick(department.department_id)}>{department.name}</a>
                </li>
              ))} 
            </ul>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item " >
              <a className="nav-link" href="#">Cart ${totalAmout} {cartCount}</a>
            </li> 
         </ul>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" onChange={(e) => props.searchByName(e)} type="search" placeholder="Search" aria-label="Search"/>
             <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={() => props.searchClick(props.searchQuery)} >Search</button>
           </form>
          </ul>
       </div>
      </nav>
    </div>
  )
};

export default Header;