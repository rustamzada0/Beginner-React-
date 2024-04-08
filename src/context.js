import React, {Component} from "react";

// seyfe yuklenende birinci bura ishleyir cunki "index.js" ise dusur ve en birnci "UserProvider" islemelidir
console.log("1-ci");

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
  console.log(state, "salam state");
  console.log(action, "salam action");
  console.log(action.type, "salam action.type");
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
        // users: state.users.push(action.payload)
      }
    default:
      return state
  }
}

export class UserProvider extends Component {

  // Butun state(data)-lar burdan props vasitesi ile gonderilir (Users componentinde tuturuq)
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
      // hemishe ishleyir ve artiq delete olan kimi "reducer" undefined yerine ferqli type olacaq
      dispatch: action => {
        this.setState(state => reducer(state, action))
        console.log(action, "salam action"); // { type: 'DELETE_USER', payload: meselen 2 }
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