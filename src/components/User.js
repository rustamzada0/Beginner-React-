// class components - rcc

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isVisible } from '@testing-library/user-event/dist/utils'

class User extends Component {

  state = {
    isVisible: false
  }

  // constructor(props){
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }

  onClickEvent = (number, e) => {
    // console.log(number)
    this.setState(
      { isVisible: !this.state.isVisible }
    )
  }

  // onClickEvent(e){
  //   // alert(this.props.name)
  //   console.log("test");
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(this); // asagida bind(birlestirmek) eledik yoxsa undefined olacaqdi (sebebi function custom ozumuz yazmisiq | extendden gelen function deyl (render) )
  // }
  render() {

    // Destructuring
    const { name, department, salary } = this.props
    const { isVisible } = this.state

    return (
      <div className='col-md-8 mb-4'>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <h4 className="d-inline" onClick={() => alert(name)}>{name}</h4> */}
            {/* <h4 className="d-inline" onClick = {this.onClickEvent.bind(this)}> {name}</h4> */}
            <h4 className="d-inline" onClick = {this.onClickEvent }> {name}</h4>

            <i className="fas fa-trash" style={{ cursor: "pointer"}} ></i>
          </div>
          { isVisible

            ? <div className="card-body">
                <p className="card-text">{department}</p>
                <p className="card-text">{salary}</p>
              </div>

            : null

          }
        </div>


        {/* <form action="">
            <input type="text" />
            <button>Add</button>
        </form> */}

        {/* <ul>
          <li>Name: Tunay Rustamzade</li>
          <li>Department: IT</li>
          <li>Salary: 800</li>

        </ul> */}

        {/* <ul>
          <li>{name} <i className="fas fa-trash"></i></li>
          <li>{department}</li>
          <li>{salary}</li>
        </ul> */}

      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired
}

User.defaultProps = {
  name: "default name",
  department: "default department",
  salary: 0
}

export default User;