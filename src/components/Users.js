import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
  render() {

    // Destructuring
    // const { users } = this.props
    // console.log(users);

    return (
        <UserConsumer>
            {value => {
                const { users } = value
                return (
                    <div>
                        {
                            users.map(users => {
                                return (
                                    <User
                                        key={users.id} // key
                                        id={users.id}
                                        name={users.name}
                                        department={users.department}
                                        salary={users.salary}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }}
        </UserConsumer>
    )

    // return (
    //   <div>
    //     {
    //         users.map(users => {
    //             return (
    //                 <User
    //                     key={users.id} // key
    //                     name={users.name}
    //                     department={users.department}
    //                     salary={users.salary}
    //                 />
    //             )
    //         })
    //     }
    //   </div>
    // )
  }
}

export default Users

