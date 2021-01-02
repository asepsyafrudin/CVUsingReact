import React, { Component } from 'react';
import ContentTitle from '../Component/ContentTitle/ContentTitle';
import {ReactComponent as WorkingExperienceLogo}  from '../../Icon/WorkingExperience.svg';
import './WorkingExperience.css';
import ContentFieldRight from '../Component/ContentField/ContentFieldRight';

class ProfileDataRightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contentDetailProfile">
                <div className="titleDetailProfile">
                    <WorkingExperienceLogo/>
                    <ContentTitle title="Working Experience" />
                </div>
                <div className="row margin">
                    <div className="col-5">
                        <ContentFieldRight 
                            title ="PT Denso Indonesia"
                            field ="September 2014 ~ Now"/>
                    </div>
                    <div className="col-7">
                        <ContentFieldRight 
                                title ="Production Engineering"
                                field ="As a leader of Line Development for New Model, New Line,Improvement, Reduction Cost Activity , Productivity , Capacity , Process Design, and others."/>
                    </div>
                </div>
                <div className="row margin">
                    <div className="col-5">
                        <ContentFieldRight 
                            title ="AOP Div Winteq"
                            field ="Januari 2014 ~ Juni 2014"/>
                    </div>
                    <div className="col-7">
                        <ContentFieldRight 
                                title ="Engineering Internship"
                                field ="Internship Program. Propose Final Project for Process Design Improvement about Wintor Process Asssembling."/>
                    </div>
                </div>
            </div > 
        );
    }
}
 
export default ProfileDataRightSide;