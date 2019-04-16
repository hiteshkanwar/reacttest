import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/dashboard/header'
import ProductList from '../../components/dashboard/productList'
import Sidebar from '../../components/dashboard/sidebar'
import Login from '../users/login';
import Registration from '../users/registration';
import '../../../public/assets/css/home.css';
import { getCategories } from '../../actions/categories';
import { getDepartments } from '../../actions/departments';
import { getUserCart, getProductByCategoryIdList, getProductByDepartmentIdList, getAllProductList, getProductByQueryString } from '../../actions/products';


class Home extends Component {  

  constructor(props){
    super(props)
    this.state = {
      login: false,
      register: false,
      searchQuery: '',
    };
    this.categoryClick = this.categoryClick.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.departmentClick = this.departmentClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }

  componentWillMount() {
    this.props.getDepartments()
    this.props.getCategories({limit: 7, page: 1})
    this.props.getAllProductList({limit: 8,page: 1})
    this.props.getUserCart()
  }

  searchClick(query_string){
    this.props.getProductByQueryString(query_string)
  }

  categoryClick(category_id){
    this.props.getProductByCategoryIdList(category_id)
  }

  departmentClick(department_id){
    this.props.getProductByDepartmentIdList(department_id)
  }

  loginClick(){
    this.setState({login: true});
  }

  closeLoginModal(){
    this.setState({login: false});
  }

  registerClick(){
    this.setState({register: true});
  }

  closeRegisterModal(){
    this.setState({register: false});
  }

  searchByName(e){
    this.setState({searchQuery: e.target.value})
  }

  render() {
    const userLogged = (localStorage.getItem('user'))
      console.log(23,this.props)

    const { categoriesDetails: { categories}, productsDetails , departmentsDetails: { departments } }  = this.props
    const cart = this.props.productsDetails && this.props.productsDetails.cart
    const activePage = 0
    const cartCount = cart && cart.length 
    let totalAmout = 0
    totalAmout = cart &&  cart.map((c)=> { return totalAmout = totalAmout +  parseInt(c.subtotal) })
    totalAmout = totalAmout[cartCount -1]
    return (
      <div className="">
        <div className="container-fluid">
          <div className="top-bar">
            <div className="row">
              <div className="col-md-3">
                <div className="user-login">
                  {!userLogged ?
                    <h4 className="top-menu-item">
                      Hi! <a className="" href="#" onClick={()=>this.loginClick()}>Login</a>
                      or <a className="" href="#" onClick={()=>this.registerClick()}>Register</a>
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
              </div>
              <div className="col-md-6">
                <div className="navbar navbar-expand-lg">
                  <ul className="navbar-nav ml-auto text-center">
                    { departments && departments.map((department, index) => (
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
                    <a className="" href="#"> ${totalAmout} {cartCount}</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Header cart={cart} departments={departments} departmentClick={this.departmentClick} loginClick={this.loginClick} registerClick={this.registerClick} searchClick={this.searchClick} searchByName={this.searchByName} searchQuery={this.state.searchQuery}/>
        <div  className="">
          <Sidebar categories={categories} categoryClick={this.categoryClick} activePage={activePage} />
          <ProductList productsDetails={productsDetails} />
        </div>
      <div>
      { this.state.login === true && 
        <Login login={this.state.login} closeLoginModal={this.closeLoginModal}/>
      }

      { this.state.register === true && 
        <Registration register={this.state.register} closeRegisterModal={this.closeRegisterModal}/>
      }
      </div>
      </div> 
    );

  }
}

const mapStateToProps = (state) => {
  return {
    categoriesDetails: state.categories,
    departmentsDetails:  state.departments,
    productsDetails:  state.products
  }
}


export default Home = connect(mapStateToProps,
  {
    getAllProductList,
    getCategories,
    getDepartments,
    getProductByCategoryIdList,
    getProductByDepartmentIdList,
    getProductByQueryString,
    getUserCart
  })
  (Home);