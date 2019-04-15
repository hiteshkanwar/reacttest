import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { getCategories } from '../../actions/categories';
import {connect} from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageItemsCount: 7,
      activePage: 0,
      onClickEnable: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.itemClick = this.itemClick.bind(this);
  }

  itemClick(id){
    this.setState({onClickEnable: id})
    this.props.categoryClick(id)
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.getCategories({limit: this.state.pageItemsCount,page: pageNumber})
  }

  render(){
    const { categories: { rows, count } }= this.props;
    return(
     <div className="col-md-3">
        <div className="sidebar" id="sidebar">
          <ul>
            <p>Categories</p>
           { (rows || []).map((category, index) => (
            <li key={index} className= {this.state.onClickEnable==category.category_id? "active" : ""}>
              <a href="#" onClick={() => this.itemClick(category.category_id) }>{category.name}</a>
            </li>
           ))} 
          </ul>
        </div>
         <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.pageItemsCount}
          totalItemsCount={count}
          pageRangeDisplayed={Math.ceil((count)/this.state.pageItemsCount)}
          onChange={(e) => this.handlePageChange(e)}
        />
      </div>
      )
  }

}


const mapStateToProps = (state) => {
  return {
  }
}


export default Sidebar = connect(mapStateToProps,
  {
    getCategories
  })
  (Sidebar);
