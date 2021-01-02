import React, { Component } from 'react';

class ContentFieldRight extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content">
                <h3>{this.props.title}</h3>
                <h4>{this.props.field}</h4>
            </div>
         );
    }
}
 
export default ContentFieldRight;