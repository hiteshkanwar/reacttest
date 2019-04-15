import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/dashboard/header'
import ProductList from '../../components/dashboard/productList'
import Sidebar from '../../components/dashboard/sidebar'
import Login from '../users/login';
import { getCategories } from '../../actions/categories';
import { getDepartments } from '../../actions/departments';
import { getProductByCategoryIdList, getProductByDepartmentIdList, getAllProductList } from '../../actions/products';


class Home extends Component {  

  constructor(props){
    super(props)
    this.state = {
      login: false,
    };
    this.categoryClick = this.categoryClick.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.departmentClick = this.departmentClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  componentWillMount() {
    this.props.getDepartments()
    this.props.getCategories()
    this.props.getAllProductList()
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

  render() {
    const { categoriesDetails: { categories}, productsDetails: { products }, departmentsDetails: { departments } }  = this.props
    const activePage = 0
    return (
      <div className="container-fluid">
       <Header departments={departments} departmentClick={this.departmentClick} loginClick={this.loginClick}/>
       <div  className="row">
         <Sidebar categories={categories} categoryClick={this.categoryClick} activePage={activePage} />
         <ProductList products={products} />
      </div>
      <div>
      { this.state.login === true && 
        <Login login={this.state.login} closeLoginModal={this.closeLoginModal}/>
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
  })
  (Home);