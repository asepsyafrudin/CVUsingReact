import React, { Component } from 'react';
import ContentTitle from '../Component/ContentTitle/ContentTitle';
import {ReactComponent as EducationLogo}  from '../../Icon/Education.svg';
import ContentFieldRight from '../Component/ContentField/ContentFieldRight';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contentDetailProfile">
                <div className="titleDetailProfile">
                    <EducationLogo/>
                    <ContentTitle title="Education" />
                </div>
                <div className="row margin">
                    <div className="col-5">
                        <ContentFieldRight 
                            title ="Universitas Pancasila"
                            field ="2017 ~ 2018"/>
                    </div>
                    <div className="col-7">
                        <ContentFieldRight 
                                title ="Bachelor Degree Industrial Engineering"
                                field ="IPK 3.58"/>
                    </div>
                </div>
                <div className="row margin">
                    <div className="col-5">
                        <ContentFieldRight 
                            title ="Politeknik Manufaktur Astra"
                            field ="2011 ~ 2014"/>
                    </div>
                    <div className="col-7">
                        <ContentFieldRight 
                                title ="Assosiate Degree Process & Manufacturer Engineering"
                                field ="IPK 3.50"/>
                    </div>
                </div>
                <div className="row margin">
                    <div className="col-5">
                        <ContentFieldRight 
                            title ="SMAN 77 Jakarta"
                            field ="2008 ~ 2011"/>
                    </div>
                    <div className="col-7">
                        <ContentFieldRight 
                                title ="Natural Science"
                                field ="UN 54.85 (Index 60)"/>
                    </div>
                </div>
            </div > 
        );
    }
}
 
export default Education;