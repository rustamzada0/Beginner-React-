import React, { Component } from 'react'
import User from './User';

class Users extends Component {
  render() {

    // Destructuring
    const { users } = this.props
    console.log(users);

    return (
      <div>
        {
            users.map(users => {
                return (
                    <User
                        key={users.id} // key
                        name={users.name}
                        department={users.department}
                        salary={users.salary}
                    />
                )
            })
        }
      </div>
    )
  }
}

export default Users

