// functional components - rfc

import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    console.log("3-cu");
    return (
        <div>
            {/* <h1>Navbar</h1> */}
            {props.title}
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default title"
}

export default Navbar