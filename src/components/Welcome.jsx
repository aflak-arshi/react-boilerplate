import React, { Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() { 
        return ( <h1>Hello, {this.props.name}</h1> );
    }
}
 
export default Welcome;