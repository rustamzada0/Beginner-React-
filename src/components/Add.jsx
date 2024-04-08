import React, { Component } from 'react'
import posed from 'react-pose';


const Animation = posed.div({
  visible: { opacity: 1, applyAtStart: { display: 'block' } },
  hidden: { opacity: 0, applyAtEnd: { display: 'none' } }
})

class Add extends Component {

  state = {
    isVisible: true
  }

  changeVisibility = (e) => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {

    const { isVisible } = this.state

    return (
      <div className='col-md-8 mb-4'>
      <button onClick={this.changeVisibility} className='btn btn-dark btn-block mb-4'>{isVisible ? 'Hide Form' : 'Show Form'}</button>
      <Animation pose={isVisible ? 'visible' : 'hidden'}>
        <div className="card">
            <div className="card-header">
                <h4>Add User Form</h4>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="id" name="name" placeholder="Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" name="department" placeholder="Department" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input type="text" id="salary" name="salary" placeholder="Salary" className="form-control"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-danger btn-block">Add</button>
                    </div>
                </form>
            </div>
        </div>
      </Animation>
      </div>
    )
  }
}

export default Add;