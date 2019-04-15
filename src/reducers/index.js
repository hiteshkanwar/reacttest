import { combineReducers } from 'redux';
import categories from './categories';
import departments from './departments';
import products from './products';
import productDetail from './productDetail';
import productSearch from './productSearch';
import users from './users';

const rootReducer = combineReducers({
  categories: categories,
  departments: departments,
  products: products,
  productDetail: productDetail,
  productSearch: productSearch,
  user: users,
});

export default rootReducer;
