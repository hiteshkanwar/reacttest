import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import '../../../public/assets/css/productDetails.css';
import { review } from '../../actions/products';


class ProductDetail extends Component{

 constructor(props) {
    super(props);
    this.state = {
      colorChecked: 0,
      sizeChecked: 0,
      colors: [],
      sizes: [],
      reviewtext: '',
      ratingVal: 0,
    };
    this.onColorChange = this.onColorChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onReviewChange = this.onReviewChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.productDetail && nextProps.productDetail.attributes)
    {
      const colors = nextProps.productDetail.attributes.filter(function (attr) {
                  return attr.attribute_name === "Color";
                });
      const sizes = nextProps.productDetail.attributes.filter(function (attr) {
                  return attr.attribute_name === "Size";
                });
      this.setState({ colors })
      this.setState({ sizes })
    }
  }


  onColorChange(index){
     this.setState({
         colorChecked: index
     });
  }

  onSizeChange(index){
     this.setState({
         sizeChecked: index
     });
  }

  onReviewChange(e){
    this.setState({reviewtext: e.target.value})
  }

  submitReview(){
    const ratingVal = this.state.ratingVal;
    const reviewtext = this.state.reviewtext;
    const product_id = this.props.productDetail.product.product_id;
    const userLogged = (localStorage.getItem('user'))
    const userToken = userLogged && JSON.parse(userLogged).accessToken
    if (userLogged){
      this.props.review(product_id, reviewtext, ratingVal, userToken)
    }
    else{

    }
  }

  render(){
    console.log(2111,this.props)
    return (
      <div className="container-fluid">
        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="Minimal Modal Example"
           className="product-modal-box"
        >
          <div className="login-modal product-modal">
          {/*<div>
                  <button onClick={this.props.closeModal}>Close Modal</button>
                </div>*/}
            <div className="">
              <div className="row text-right">
                <div className="col-md-12">
                  <div className="modal-header">
                    <button className="btn btn-clos" onClick={this.props.closeModal}><i className="far fa-times-circle"></i></button>
                  </div>
                </div>
              </div>
              <div className="row product-row">
                <div className="col-md-4">
                  <div className="">
                    <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="100%" height="20%" /> 
                    <hr/>
                    <div className="thumbnail">
                      <img src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="15%" height="15%"/>
                      <img src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg" width="15%" height="15%"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="">
                    <div>
                      <span className="modal-title">{this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.name}</span>
                      <br/>
                      <div className="product-details">
                        <h5 className="main-price">
                            ${ this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.price}
                        </h5>
                        <h3 className="discount-price">
                            ${this.props.productDetail && this.props.productDetail.product &&  this.props.productDetail.product.discounted_price}
                        </h3>
                      </div>
                      <p className="">{this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.description}</p>
                    </div>
                  </div>
                    <h4 className="color-title">Color</h4>
                  <div>
                    {

                      this.state.colors && this.state.colors.map((option,i)=>{
                        return  <label key={option.attribute_value_id} className="custom-radio">
                                 <input 
                                  type="radio" 
                                  className="radio" 
                                  name="color" 
                                  checked={this.state.colorChecked == i? true: false}
                                  key={option.attribute_value_id}
                                  onChange={this.onColorChange.bind(this,i)} 
                                  value={option.attribute_value_id} />
                              {option.attribute_value}
                              <span className="checkmark" style={{backgroundColor: option.attribute_value}}></span>
                        </label>
                      })
                    }
                  </div>
                  <h4 className="color-title">Size</h4>
                  <div>
                    {

                      this.state.sizes && this.state.sizes.map((option,i)=>{
                        return <label key={option.attribute_value_id} className="custom-radio-size">
                                 <input 
                                  type="radio" 
                                  className="radio1" 
                                  name="sizes" 
                                  checked={this.state.sizeChecked == i? true: false}
                                  key={option.attribute_value_id}
                                  onChange={this.onSizeChange.bind(this,i)} 
                                  value={option.attribute_value_id} />
                              {option.attribute_value}
                              <span className="checkmark"></span>
                           </label>
                      })
                    }
                  </div>
                  <div className="row text-right mt-40">
                    <div className="col-md-8">
                      <button className="btn btn-theme" onClick={this.props.addCart}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-center leave-review">
                <div className="col-md-12">
                  <h4 className="review-title">Leave a Review</h4>
                  <textarea type="text"  name="" className="form-control" />
                  <div>
                    <span>Leave a Review</span><br/>
                    <textarea type="text"  onChange={(e) => this.onReviewChange(e)} name=""/>
                  </div>
                  <fieldset className="rating">
                     <input type="radio" id="star5" name="rating" value="5" onClick={()=>this.setState({ratingVal: 5})}/>
                      <label className = "full" htmlFor="star5" title="Awesome - 5 stars">
                      </label>
                     <input type="radio" id="star4" name="rating" value="4" onClick={()=>this.setState({ratingVal: 4})}/>
                     <label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                     <input type="radio" id="star3" name="rating" value="3" onClick={()=>this.setState({ratingVal: 3})}/>
                     <label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                     <input type="radio" id="star2" name="rating" value="2" onClick={()=>this.setState({ratingVal: 2})}/>
                     <label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                     <input type="radio" id="star1" name="rating" value="1" onClick={()=>this.setState({ratingVal: 1})}/>
                     <label className = "full" htmlFor="star1" title="Sucks big time - 1 star">
                     </label>
                  </fieldset>
                  <div>
                    <button className="Leave-btn" onClick={()=>this.submitReview()}>Leave Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </ReactModal>
      </div>
    )
  }

 }


 export default ProductDetail = connect(null,
  {
    review
  })
  (ProductDetail);