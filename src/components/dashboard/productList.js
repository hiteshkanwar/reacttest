import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import Pagination from "react-js-pagination";
import ProductDetail from './productDetail';
import { addToUserCart, getProductDetailById,getAllProductList,getProductByCategoryIdList } from '../../actions/products';

class ProductList  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageItemsCount: 8,
      activePage: 1,
      showModal: false,
      product: [],
      category_id: undefined
    };
    this.addToCart = this.addToCart.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    this.setState({category_id: (nextProps.productsDetails && nextProps.productsDetails.category_id)})


    //this.setState({activePage:1})
  }

  addToCart(){
    const product_attr = this.props.productDetail.productDetail.product
    const cart_id = JSON.parse(localStorage.getItem('user'))['user']['customer_id']
    const product_id = this.props.productDetail.productDetail.product.product_id
    this.props.addToUserCart(cart_id, product_id, product_attr)
  }

  handleOpenModal(product_id) {
    this.props.getProductDetailById(product_id);
    this.setState({ showModal: true, product_id: product_id });
  }
  
  handleCloseModal(){
    this.setState({ showModal: false });
  }
  
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    if(this.state.category_id){
      this.props.getProductByCategoryIdList(this.state.category_id)
    }else{
      this.props.getAllProductList({limit: this.state.pageItemsCount,page: pageNumber});
    }
  }

  render(){
    const { productsDetails: {products: { rows, count }} }= this.props;
    const productCount = rows && rows.length
    return ( 
      <div className="col-md-10 col-sm-9 categories-content">
        <div className="row">
          <div className="col-md-12">
            <div className="pagination-tab">
              <nav aria-label="Page navigation example">
                <Pagination
                  activePage={this.state.activePage}
                  activeClass={'active'}
                  itemsCountPerPage={this.state.pageItemsCount}
                  totalItemsCount={count}
                  pageRangeDisplayed={Math.ceil((count)/this.state.pageItemsCount)}
                  // pageRangeDisplayed={5}
                  onChange={(e) => this.handlePageChange(e)}
                  firstPageText={false}
                  lastPageText ={false}
                />
              </nav>
            </div>
          </div>
          { (rows || []).map((product, index) => (
            <div className="col-12 col-sm-6 col-md-3 col-lg-3" key={index} onClick={()=>this.handleOpenModal(product.product_id)}>
              <div className="card">
                <h3 className="card-title">{product.name}</h3>
              
                <div className="product-image2">
                    <a href="#">
                        <img className="card-img" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="100%" /> 
                    </a>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                      <div className="price">${product.price}</div>
                      <a href="#" className="btn btn-danger">${product.discounted_price}</a>
                  </div>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))} 
        </div>
         {this.props.productDetail &&  this.props.productDetail.productDetail &&
           <ProductDetail  addCart={this.addToCart} productDetail = {this.props.productDetail.productDetail} showModal = {this.state.showModal} closeModal={this.handleCloseModal}/>
         }
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetail
  }
}


export default ProductList = connect(mapStateToProps,
  {
    addToUserCart,
    getProductDetailById,
    getAllProductList,
    getProductByCategoryIdList
  })
  (ProductList);