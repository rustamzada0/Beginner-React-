import React, { Component } from 'react'

class Add extends Component {
  render() {
    return (
      <div className='col-md-8 mb-4'>
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
      </div>
    )
  }
}

export default Add;