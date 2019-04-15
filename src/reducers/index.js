import { combineReducers } from 'redux';
import categories from './categories';
import departments from './departments';
import products from './products';
import productDetail from './productDetail';
import users from './users';

const rootReducer = combineReducers({
  categories: categories,
  departments: departments,
  products: products,
  productDetail: productDetail,
  users: users,
});

export default rootReducer;
