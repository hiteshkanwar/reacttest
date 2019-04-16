import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import { login } from '../../actions/users';

class Shipping  extends Component {

  constructor(props) {
    super(props);
     this.state = {
    
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
   
  }
  
  render(){
    return(
      <div className="container-fluid">
        <section class="shipping py-lg-4 py-md-3 py-sm-3 py-3">
            <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
                 <form className="col-md-8 col-md-offset-2">

                    <div class="row">
                       <div class="col-md-12">
                        <h4 className="shipping-title">
                          Shipping Address
                        </h4>
                          <label>
                            <p class="label-txt">Address 1</p>
                            <input type="text" class="input"/>
                            <div class="line-box">
                              <div class="line"></div>
                            </div>
                          </label>
                       </div> 
                       <div class="col-md-12">
                          <label>
                            <p class="label-txt">Address 2</p>
                            <input type="text" class="input"/>
                            <div class="line-box">
                              <div class="line"></div>
                            </div>
                          </label>
                       </div> 
                       <div class="col-md-4">
                          <label>
                            <p class="label-txt">City</p>
                            <input type="text" class="input"/>
                            <div class="line-box">
                              <div class="line"></div>
                            </div>
                          </label>
                       </div>
                       <div class="col-md-4">
                          <label>
                            <p class="label-txt">Region</p>
                            <input type="text" class="input"/>
                            <div class="line-box">
                              <div class="line"></div>
                            </div>
                          </label>
                       </div>
                       <div class="col-md-4">
                          <label>
                            <p class="label-txt">Postal Code</p>
                            <input type="text" class="input"/>
                            <div class="line-box">
                              <div class="line"></div>
                            </div>
                          </label>
                       </div>
                    </div>

                    <div class="row select-labels">
                        <div class="col-md-4">
                           <label>Country</label>
                           <select class="form-control">
                             <option>Please select</option>
                             <option>hajhdfksdh</option>
                             <option>hajhdfksdh</option>
                           </select>
                        </div>
                        <div class="col-md-4">
                           <label>Shipping Region</label>
                           <select class="form-control">
                             <option>Please select</option>
                             <option>hajhdfksdh</option>
                             <option>hajhdfksdh</option>
                           </select>
                        </div>
                        <div class="col-md-4">
                           <label>Shipping Options</label>
                           <select class="form-control">
                             <option>Please select</option>
                             <option>hajhdfksdh</option>
                             <option>hajhdfksdh</option>
                           </select>
                        </div>
                    </div>
                    <br/>
                    <button class="btn btn-pink" type="submit">submit</button>
                  </form>             
            </div>
        </section>
      </div>
    )
  }
}


export default Shipping ;