import React, { Component } from 'react';
import './ProfileTitle.css'

class ProfileTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contentProfile">
                <h2>{this.props.title}</h2>
            </div>
         );
    }
}
 
export default ProfileTitle;