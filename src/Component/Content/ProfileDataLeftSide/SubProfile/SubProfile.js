import React, { Component } from 'react';
import './SubProfile.css';

class SubProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="subProfile">
                <h3><b>{this.props.title}</b></h3>
                <h4 id="name">{this.props.field}</h4>
            </div>
         );
    }
}
 
export default SubProfile;