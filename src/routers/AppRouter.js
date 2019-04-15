import React from 'react';
import { Router, Link, Route, Switch, NavLink,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Home from '../containers/dashboard'

export const history = createHistory();


export default  class AppRouter extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </Router>
      )
    }
}