import React, { Component } from 'react';
import * as firebase from 'firebase';
import './UserList.css';

class UserList extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref().child('users');
    dbRef.on('value', snap => {
      let users = snap.val();
      console.log(users);
      this.setState({
        users: Object.keys(users).map(k => (users[k].login = k) && users[k])
      })
    })
  }

  render() {
    let usersLi = [];
    for (let user of this.state.users) usersLi.push (
      <tr key={user.login}>
        <td>{user.login}:</td>
        <td><strong>{user.Name}</strong></td>
        <td><a href={'tel:'+user.PhoneNum}>{user.PhoneNum}</a></td>
        <td>{user.Prompts}</td>
        <td>{user.PromptsRecieved || 'n/a'}</td>
        <td>{user.TimeInTraffic}</td>
        <td>{user.TrafficValue}</td>
      </tr>
    )
    return (
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Prompts</th>
              <th>Prompts Recieved</th>
              <th>Time in traffic</th>
              <th>Traffic value</th>
            </tr>
          </thead>
          <tbody>
            {usersLi}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
