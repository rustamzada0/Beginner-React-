import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
  render() {

    // Destructuring
    // const { users } = this.props
    // console.log(users);
    console.log("4-cu");
    return (
        <UserConsumer>
            {value => {
                const { users } = value  // state-den gelen data-ni burada tuturuq
                const { dispatch } = value // state-den gelen dispatch-ni burada tuturuq
                console.log(value); // { users: Array(4), dispatch: ƒ }
                console.log(dispatch.type); // undefined ---> Cunki heleki type verilmiyib
                console.log(users); // Array(4)
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

