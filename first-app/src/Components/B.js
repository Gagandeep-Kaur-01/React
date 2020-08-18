import React, {Component} from 'react';
import PropTypes from "prop-types";

class B extends React.Component {
    render() {
        return <p> {this.props.text}</p>;
    }
}

B.propTypes = {
    text: PropTypes.string
};
B.defaultProps = {
    text: null
};

export default B;


/*
•	PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 
*/