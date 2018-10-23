import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Home from '../views/Home';
import Detail from '../views/Detail';
import PostEditor from '../views/PostEditor';
import PostShow from '../views/PostShow';
import Login from '../views/Login';
import HelpManual from '../views/HelpManual';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={Detail}></Route>
          <Route path="/post_new" component={PostEditor}></Route>
          <Route path="/post_show/:category_id/:id" component={PostShow}></Route>
          <Route path="/psot_edit/:id" component={PostEditor}></Route>
          <Route path='/create_site' component={HelpManual}></Route>
          <Route path='/login' component={Login}></Route>
        </div>
      </Router>
    );
  }
}

export default RouteComponent
