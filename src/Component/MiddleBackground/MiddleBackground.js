import React, { Component } from 'react';
import './MiddleBackground.css';

class MiddleBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="middleBackground">
                <div className="row">
                    <div className="col-4">
                        <div className="resumeTitle">
                            <div className="resume">Resume</div>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default MiddleBackground;