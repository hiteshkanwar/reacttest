import React, { Component } from 'react';
import ReactModal from 'react-modal';

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
        >
          <div className="col-md-5">
            <div className="row">
              <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" width="100%" /> 
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div>
                <span>{this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.name}</span>
                <br/>
                <div className="product-details">
                  <span> Price: ${ this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.price}</span>
                  <span>Discount Price: ${this.props.productDetail && this.props.productDetail.product &&  this.props.productDetail.product.discounted_price}</span>
                </div>
                <br/>
                <span>{this.props.productDetail && this.props.productDetail.product && this.props.productDetail.product.description}</span>
              </div>
            </div>
            <br/>
              <span>color</span>
            <div>
              {

                this.state.colors && this.state.colors.map((option,i)=>{
                  return <label key={option.attribute_value_id}>
                           <input 
                            type="radio" 
                            className="radio" 
                            name="color" 
                            checked={this.state.colorChecked == i? true: false}
                            key={option.attribute_value_id}
                            onChange={this.onColorChange.bind(this,i)} 
                            value={option.attribute_value_id} />
                        {option.attribute_value}
                     </label>
                })
              }
            </div>
            <br/>
            <span>sizes</span>
            <div>
              {

                this.state.sizes && this.state.sizes.map((option,i)=>{
                  return <label key={option.attribute_value_id}>
                           <input 
                            type="radio" 
                            className="radio1" 
                            name="sizes" 
                            checked={this.state.sizeChecked == i? true: false}
                            key={option.attribute_value_id}
                            onChange={this.onSizeChange.bind(this,i)} 
                            value={option.attribute_value_id} />
                        {option.attribute_value}
                     </label>
                })
              }
            </div>
          </div>
          <div>
            <button onClick={this.props.closeModal}>Close Modal</button>
          </div>
         </ReactModal>
      </div>
    )
  }

 }


 export default ProductDetail;
