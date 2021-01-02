import React, { Component } from 'react';
import './ContentTitle.css';

class ContentTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span className="title">{this.props.title}
            </span>
         );
    }
}
 
export default ContentTitle;