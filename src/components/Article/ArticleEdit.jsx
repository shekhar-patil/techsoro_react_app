import React from 'react';
import axios from 'axios';
import { API_ROOT } from './../../config';

class ArticleEdit extends React.Component {
  constructor() {
    super();
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({method: 'get', url: `${API_ROOT}/articles/${this.props.match.params.id}.json`, headers: {'Authorization': token }})
      .then((response) => {
        this.setState(response.data)
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(event) {
    event.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt")
    axios({ method: 'patch', url: `${API_ROOT}/articles/${this.state.id}`, headers: {'Authorization': token }, data: this.state})
      .then(() => {
        this.props.history.push(`/articles/${this.state.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push(`/articles/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit: {this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea name="body" rows="5" value={this.state.body} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ArticleEdit;
