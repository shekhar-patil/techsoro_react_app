import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import ArticleList from './Article/ArticleList';
import ArticleInfo from './Article/ArticleInfo';
import ArticleAdd from './Article/ArticleAdd';
import ArticleEdit from './Article/ArticleEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Main />
        <Footer />
      </Router>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);

export default App;
