import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../../../public/assets/css/productDetails.css';

class ProductDetail extends Component{

 constructor(props) {
    super(props);
    this.state = {
      colorChecked: 0,
      sizeChecked: 0,
      colors: [],
      sizes: [],
    };
    this.onColorChange = this.onColorChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
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

  render(){
    return (
      <div className="container-fluid">
        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="Minimal Modal Example"
           className="product-modal-box"
        >
          <div className="login-modal product-modal">
            <div className="">
              <div className="row">
                <div className="col-md-3">
                  <div className="">
                    <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="100%" height="20%" /> 
                    <hr/>
                    <div className="thumbnail">
                      <img src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="15%" height="15%"/>
                      <img src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg" width="15%" height="15%"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
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
                              <span class="checkmark" style={{backgroundColor: option.attribute_value}}></span>
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
                  <div className="row text-right">
                    <div className="col-md-8">
                      <button className="btn btn-theme">Add to cart</button>
                    </div>
                  </div>
                  <div>
                    <span>Leave a Review</span><br/>
                    <textarea type="text"  name=""/>
                  </div>
                  <div>
                    <button className="Leave-btn">Leave Review</button>
                  </div>
                </div>
                <div>
                  <button onClick={this.props.closeModal}>Close Modal</button>
                </div>
              </div>
            </div>
          </div>
         </ReactModal>
      </div>
    )
  }

 }


 export default ProductDetail;
