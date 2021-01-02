import React, { Component } from 'react';
import PhotoProfile from './PhotoProfile/PhotoProfile';
import PhotoAsep from '../Image/AsepFoto.jpg';
import './Content.css';
import ProfileDataLeftSide from './ProfileDataLeftSide/ProfileDataLeftSide';
import ProfileDataRightSide from './ProfileDataRightSide/ProfileDataRightSide';
import Footer from '../Footer/Footer';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="background">
                <div className="row">
                    <div className= "col-4">
                        <PhotoProfile 
                            image = {PhotoAsep}
                            alt = "Photo"
                        />
                        <ProfileDataLeftSide/>
                    </div>
                    <div className ="col-8">
                        <div className="nameCover">
                            <h1>Asep </h1>
                            <h1>Syafrudin</h1>
                        </div>
                        <div className="jobTitle">
                            <h2>Engineer</h2>
                        </div>
                        <ProfileDataRightSide />
                    </div>
                </div>
                <br></br>
                <Footer/>
            </div>
         );
    }
}
 
export default Content;
