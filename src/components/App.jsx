import React, { Component } from "react";
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            this.props.children
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
