import React, { Component } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import { API_ROOT } from './../../config';

class ArticleList extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({method: 'get', url: `${API_ROOT}/articles.json`, headers: {'Authorization': token }})
      .then(response => {
        this.setState({ articles: response.data })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.body}
              <hr/>
            </div>
          )
        })}
        <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>
      </div>
    )
  }
}

export default ArticleList;
