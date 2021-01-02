import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div className="footer">
            <h5>&copy; Copyright 2020 by Asep Syafrudin</h5>
        </div> );
    }
}
 
export default Footer;