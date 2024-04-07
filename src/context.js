import React, {Component} from "react";

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
    state = {
        users: [
          {
            id: 1,
            name: "Meftun Mirzezade",
            department: "Textile",
            salary: 800
          },
          {
            id: 2,
            name: "Tunay",
            department: "Textile",
            salary: 800
          },
          {
            id: 3,
            name: "Mirze",
            department: "Textile",
            salary: 800
          },
          {
            id: 4,
            name: "Rustam",
            department: "Textile",
            salary: 800
          }
        ]
      }
  render() {
    return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;