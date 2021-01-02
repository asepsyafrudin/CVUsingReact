import React, { Component } from 'react';
import ProfileTitle from './ProfileTitle/ProfileTitle';
import SubProfile from './SubProfile/SubProfile';
import './ProfileDataLeftSide.css';
import {ReactComponent as ContactLogo}  from '../Icon/Contact.svg'
import {ReactComponent as EmailLogo}  from '../Icon/Email.svg'
import {ReactComponent as FacebookLogo}  from '../Icon/Facebook.svg'
import {ReactComponent as InstagramLogo}  from '../Icon/Instagram.svg'

class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="profile">
                    <ProfileTitle title="PROFILE"/>
                    <SubProfile title="Name" 
                                field="Asep Syafrudin"/>
                    <SubProfile title="Date of Birth" 
                                field="Jakarta , 22 July 1993"/>
                    <SubProfile title="Address" 
                                field="Jalan Kramat pulo dalam II gg 18 No B169A, RT 001 / RW 008
                                       Kelurahan Kramat , Kecamatan Senen, Jakart Pusat
                                       10450"/>
                </div>
                <div className="profile">
                    <ProfileTitle title="AWARDS"/>
                    <SubProfile title="2019 The Best Non Add On Activity" 
                                field="Productivity Activity Achievment Awards in Production 
                                       Engineering div by reducing Man Hour "/>
                    <SubProfile title="2018 The Best Add On Activity" 
                                field="Productivity Activity Achievement Awards in Production 
                                       Engineering div by Changing Manual Process with Automation 
                                       by Robot"/>
                </div>
                <div className ="profile">
                    <ProfileTitle title="CONTACT"/>
                    <div className= "row">
                        <div className = "col-8">
                                <SubProfile title = "Phone Number"
                                            field = "083877778823"/>
                        </div>
                        <div className = "col-4">
                            <br></br>
                            <ContactLogo/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "col-8">
                                <SubProfile title = "Email"
                                            field = "asseeppsyafrudin @gmail.com" />
                        </div>
                        <div className = "col-4">
                            <br></br>
                            <EmailLogo/>
                        </div>
                    </div>
                </div>
                <div className ="profile">
                    <ProfileTitle title="SOSIAL MEDIA"/>
                    <div className= "row">
                        <div className = "col-8">
                                <SubProfile title = "Instagram"
                                            field = "@asseeppsyafrudin"/>
                        </div>
                        <div className = "col-4">
                            <br></br>
                            <InstagramLogo/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "col-8">
                                <SubProfile title = "Facebook"
                                            field = "@aasseepp" />
                        </div>
                        <div className = "col-4">
                            <br></br>
                            <FacebookLogo/>
                        </div>
                    </div>
                </div>

            </>
         );
    }
}
 
export default ProfileData;