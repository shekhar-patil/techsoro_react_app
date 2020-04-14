import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_ROOT } from './../../config';

class ArticleInfo extends Component {
  constructor() {
    super();
    this.state = { article: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({method: 'get', url: `${API_ROOT}/articles/${this.props.match.params.id}.json`, headers: {'Authorization': token }})
      .then((response) => {
        this.setState({
          article: response.data
        })
      })
      .catch(error => console.log('error', error));
  }

  handleDelete() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({ method: 'delete', url: `${API_ROOT}/articles/${this.props.match.params.id}`, headers: {'Authorization': token}})
      .then(() => {
        this.props.history.push("/articles")
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.id}: {this.state.article.title}</h2>
        <p>{this.state.article.content}</p>
        <p>
          <Link to={`${this.state.article.id}/edit`} className="btn btn-outline-dark">Edit</Link>
          <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button>
          <Link to="/articles" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    )
  }
}

export default ArticleInfo;
