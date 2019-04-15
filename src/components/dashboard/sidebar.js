import React, { Component } from 'react';
import Pagination from "react-js-pagination";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageItemsCount: 10,
      activePage: 0
    };
    this.paginationDataMap = this.paginationDataMap.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
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

  handlePageChange(pageNumber) {
    this.setState({activePage: (pageNumber-1)});
  }

  render(){
    const { categories: { rows, count } }= this.props;
    return(
     <div className="col-md-2">
        <div className="sidebar">
          <h1>Categories</h1>
          <ul>
           { rows && this.paginationDataMap(rows).map((category, index) => (
            <li key={index}>
              <a href="#" onClick={() => this.props.categoryClick(category.category_id)}>{category.name}</a>
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

export default Sidebar;