import React, {Component} from "react";

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

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
        ],
        dispatch: action => {
          this.setState(state => reducer(state, action))
        }
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