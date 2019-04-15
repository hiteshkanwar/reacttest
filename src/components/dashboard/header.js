import React, { Component } from 'react';

const Header = (props) =>{
  const userLogged = (localStorage.getItem('user'))
  console.log(222,userLogged)
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
                    <a className="nav-link" href="#">Register</a>
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
            <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form>
          </ul>
       </div>
      </nav>
    </div>
  )
};

export default Header;