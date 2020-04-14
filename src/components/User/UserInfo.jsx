import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_ROOT } from './../../config';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({method: 'get', url: `${API_ROOT}/users/${this.props.match.params.id}`, headers: {'Authorization': token }})
      .then((response) => {
        this.setState({
          user: response.data
        })
      })
      .catch(error => console.log('error', error));
  }

  handleDelete() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({ method: 'delete', url: `http://techsoro.herokuapp.com/api/v1/users/${this.props.match.params.id}`, headers: {'Authorization': token}})
      .then(() => {
        this.props.history.push("/users")
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.id}: {this.state.user.title}</h2>
        <p>{this.state.user.content}</p>
        <p>
          <Link to={`api/v1/users/${this.state.user.id}/edit`} className="btn btn-outline-dark">Edit</Link>
          <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button>
          <Link to="/users" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    )
  }
}

export default UserInfo;
