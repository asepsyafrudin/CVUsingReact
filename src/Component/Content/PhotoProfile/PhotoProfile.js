import React, { Component } from 'react';
import './PhotoProfile.css'

class PhotoProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="imageTitle">
                <div className="circleImage">
                    <div className="frameImage">
                        <img src={this.props.image} alt={this.props.alt}/>
                        {console.log(this.props.image)}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PhotoProfile;