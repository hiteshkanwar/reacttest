import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Header from '../../components/dashboard/header'
import {connect} from 'react-redux';
import { getUserCart, emptyUserCart } from '../../actions/products';
import {history} from '../../routers/AppRouter';

let userLogged 
class Cart  extends Component {

  constructor(props) {
    super(props);
     this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.emptyCart = this.emptyCart.bind(this)
  }

  componentWillMount() {
    userLogged = JSON.parse(localStorage.getItem('user'))['user']["customer_id"]
  }


  handleSubmit(e) {
   
  }

  shippingPage(){
    history.push('/shipping')
  }

  emptyCart(){
    userLogged && this.props.emptyUserCart(userLogged)
  }
  
  render(){
    const { categoriesDetails: { categories}, productsDetails , departmentsDetails: { departments } }  = this.props
    const cart = userLogged && this.props.productsDetails && this.props.productsDetails.cart
    return(
      <div className="">
       <Header cart={cart} departments={departments} departmentClick={this.departmentClick} loginClick={this.loginClick} registerClick={this.registerClick} searchClick={this.searchClick} searchByName={this.searchByName} searchQuery={this.state.searchQuery}/>
       <section className="checkout py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="shop_inner_inf">
              <div className="privacy about">
                 <div className="checkout-right">
                    <div className="table-top-section">
                      <button className="btn btn-pink" onClick={()=>this.emptyCart()}>Empty Cart</button>
                      <div className="total-price">Total: $74.84</div>
                      <button className="btn btn-pink" onClick={()=> this.shippingPage().bind(this)}>Place Order</button>
                    </div>
                    <table className="timetable_sub">
                      <thead>
                        <tr>
                          <th>Remove</th>
                          <th>Name</th>
                          <th>Attributes</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Sub Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        { (cart || []).map((product, index) => (
                          <tr className="rem1">
                             <td className="invert">
                                skdfhkjd
                             </td>
                             <td className="invert">{product.name}</td>
                             <td className="invert">Bella Toes</td>
                             <td className="invert">${product.price}</td>
                             <td className="invert">
                                <div className="quantity">
                                   <div className="quantity-select">
                                      <div className="entry value-minus">&nbsp;</div>
                                      <div className="entry value"><span>{product.quantity}</span></div>
                                      <div className="entry value-plus active">&nbsp;</div>
                                   </div>
                                </div>
                             </td>
                             <td>{product.subtotal}</td>
                          </tr>
                        ))} 
                      </tbody>
                    </table>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categoriesDetails: state.categories,
    departmentsDetails:  state.departments,
    productsDetails:  state.products
  }
}
 
export default Cart = connect(mapStateToProps, 
  {emptyUserCart} 
)
  (Cart);