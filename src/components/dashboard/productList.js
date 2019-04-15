import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import Pagination from "react-js-pagination";
import ProductDetail from './productDetail';
import { addToUserCart, getProductDetailById, getAllProductList} from '../../actions/products';


class ProductList  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageItemsCount: 8,
      activePage: 0,
      showModal: false,
      product: [],
      item: []
    };
    this.addToCart = this. addToCart.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    //this.paginationDataMap = this.paginationDataMap.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
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
    this.props.getAllProductList({limit: this.state.pageItemsCount,page: pageNumber});
  }


  render(){
    const rows = this.props.products && this.props.products.products && this.props.products.products.rows
    const count = this.props.products && this.props.products.products && this.props.products.products.count
    const productCount = rows && rows.length
    return ( 
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-12">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.pageItemsCount}
              totalItemsCount={count}
              pageRangeDisplayed={Math.ceil((count)/this.state.pageItemsCount)}
              onChange={(e) => this.handlePageChange(e)}
            />
          </div>
          { (rows || []).map((product, index) => (
            <div className="col-md-3 col-sm-6 product-grid2" key={index} onClick={()=>this.handleOpenModal(product.product_id)}>
              <div>
               <span>{product.name}</span>
              </div>
              <div className="product-image2">
                  <a href="#">
                      <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="100%" /> 
                  </a>
              </div>
              <div className="product-details">
                <span> Price: ${product.price}</span>
                <span>Discount Price: ${product.discounted_price}</span>
              </div>
               <div>
               <span>{product.description}</span>
              </div>
            </div>
          ))} 
        </div>
        {this.props.addToCart}
         {this.props.productDetail &&  this.props.productDetail.productDetail && this.props.productDetail.productDetail.product &&
           <ProductDetail productDetail = {this.props.productDetail.productDetail} showModal = {this.state.showModal} closeModal={this.handleCloseModal} addCart={this.addToCart}/>
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
    getProductDetailById,
    getAllProductList
  })
  (ProductList);