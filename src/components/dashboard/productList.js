import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import Pagination from "react-js-pagination";
import ProductDetail from './productDetail';
import { getProductDetailById } from '../../actions/products';

class ProductList  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageItemsCount: 8,
      activePage: 0,
      showModal: false,
      product: []
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.paginationDataMap = this.paginationDataMap.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

 
  componentWillReceiveProps(nextProps) {
    this.setState({activePage:0})
  }

  handleOpenModal(product_id) {
    this.props.getProductDetailById(product_id);
    this.setState({ showModal: true });
  }
  
  handleCloseModal(){
    this.setState({ showModal: false });
  }
  
  handlePageChange(pageNumber) {
    this.setState({activePage: (pageNumber-1)});
  }

  paginationDataMap(data){
    data = Object.assign([],data)
    const currentPage = this.state.activePage
    const itemData = this.state.pageItemsCount
    if(currentPage>0){
      return data.splice(currentPage*itemData,itemData)
    }else{
      return data.splice(0,itemData)
    }
  }


  render(){
    const { products: { rows, count } }= this.props;
    const productCount = rows && rows.length
    return ( 
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-12">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.pageItemsCount}
              totalItemsCount={productCount}
              pageRangeDisplayed={Math.ceil((count)/this.state.pageItemsCount)}
              onChange={(e) => this.handlePageChange(e)}
            />
          </div>
          { rows && this.paginationDataMap(rows).map((product, index) => (
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
         {this.props.productDetail &&  this.props.productDetail.productDetail &&
           <ProductDetail productDetail = {this.props.productDetail.productDetail} showModal = {this.state.showModal} closeModal={this.handleCloseModal}/>
         }
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    productDetail:  state.productDetail
  }
}


export default ProductList = connect(mapStateToProps,
  {
    getProductDetailById
  })
  (ProductList);