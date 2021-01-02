import React, { Component } from 'react';
import {ReactComponent as SkillLogo} from '../../Icon/Skill.svg';
import ContentTitle from '../Component/ContentTitle/ContentTitle';
import ContentFieldRight from '../Component/ContentField/ContentFieldRight';
import Dot from '../Component/dot/Dot';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 
        return ( 
            <div className="contentDetailProfile">
                <div className="titleDetailProfile">
                    <SkillLogo/>
                    <ContentTitle title="Skill" />
                </div>
                <div className="row margin">
                    <div className="col-6">
                        <ContentFieldRight 
                        title ="Profesional Skill" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Process Control</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="processControl"/>
                                <Dot className ="dot blue" id = "2" name="processControl" />
                                <Dot className ="dot blue" id="3" name="processControl"/>
                                <Dot className ="dot blue" id= "4" name="processControl"/>
                                <Dot className ="dot" id = "5" name="processControl"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Inventory Control</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="inventoryControl"/>
                                <Dot className ="dot blue" id="2" name="inventoryControl" />
                                <Dot className ="dot blue" id="3" name="inventoryControl"/>
                                <Dot className ="dot blue" id="4" name="inventoryControl"/>
                                <Dot className ="dot" id="5" name="inventoryControl"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Plan Capacity</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="planCapacity"/>
                                <Dot className ="dot blue" id="2" name="planCapacity"/>
                                <Dot className ="dot blue" id="3" name="planCapacity"/>
                                <Dot className ="dot blue" id="4" name="planCapacity"/>
                                <Dot className ="dot blue" id="5" name="planCapacity"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Production Plan</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="productionPlan"/>
                                <Dot className ="dot blue" id="2" name="productionPlan"/>
                                <Dot className ="dot blue" id="3" name="productionPlan"/>
                                <Dot className ="dot blue" id="4" name="productionPlan"/>
                                <Dot className ="dot" id="5" name="productionPlan"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Line Balancing</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="lineBalancing"/>
                                <Dot className ="dot blue" id="2" name="lineBalancing"/>
                                <Dot className ="dot blue" id="3" name="lineBalancing"/>
                                <Dot className ="dot blue" id="4" name="lineBalancing"/>
                                <Dot className ="dot blue" id="5" name="lineBalancing"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>PFMEA</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="PFMEA"/>
                                <Dot className ="dot blue" id="2" name="PFMEA"/>
                                <Dot className ="dot blue" id="3" name="PFMEA"/>
                                <Dot className ="dot blue" id="4" name="PFMEA"/>
                                <Dot className ="dot" id="5" name="PFMEA"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ContentFieldRight 
                                title ="MS Softwere" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Ms Word</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="msWord" />
                                <Dot className ="dot blue" id="2" name="msWord" />
                                <Dot className ="dot blue" id="3" name="msWord"/>
                                <Dot className ="dot blue" id="4" name="msWord"/>
                                <Dot className ="dot" id="5" name="msWord"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Ms Excel</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="msExcel"/>
                                <Dot className ="dot blue" id="2" name="msExcel"/>
                                <Dot className ="dot blue" id="3" name="msExcel"/>
                                <Dot className ="dot blue" id="4" name="msExcel"/>
                                <Dot className ="dot" id="5" name="msExcel"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Ms PowerPoint</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="msPowerPoint"/>
                                <Dot className ="dot blue" id="2" name="msPowerPoint"/>
                                <Dot className ="dot blue" id="3" name="msPowerPoint"/>
                                <Dot className ="dot blue" id="4" name="msPowerPoint"/>
                                <Dot className ="dot" id="5" name="msPowerPoint"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Ms Project</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="msProject"/>
                                <Dot className ="dot blue" id="2" name="msProject"/>
                                <Dot className ="dot blue" id="3" name="msProject"/>
                                <Dot className ="dot" id="4" name="msProject"/>
                                <Dot className ="dot" id="5" name="msProject"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Ms Visio</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="msVisio"/>
                                <Dot className ="dot blue" id="2" name="msVisio"/>
                                <Dot className ="dot blue" id="3" name="msVisio"/>
                                <Dot className ="dot blue" id="4" name="msVisio"/>
                                <Dot className ="dot" id="5" name="msVisio"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin">
                    <div className="col-6">
                        <ContentFieldRight 
                        title ="CAD Design" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Inventor</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="inventor"/>
                                <Dot className ="dot blue" id="2" name="inventor"/>
                                <Dot className ="dot blue" id="3" name="inventor"/>
                                <Dot className ="dot blue" id="4" name="inventor"/>
                                <Dot className ="dot" id="5" name="inventor"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>3D Onshape</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="onshape"/>
                                <Dot className ="dot blue" id="2" name="onshape"/>
                                <Dot className ="dot blue" id="3" name="onshape"/>
                                <Dot className ="dot blue" id="4" name="onshape"/>
                                <Dot className ="dot" id="5" name="onshape"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>AutoCad</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="autocad"/>
                                <Dot className ="dot blue" id="2" name="autocad"/>
                                <Dot className ="dot blue" id="3" name="autocad"/>
                                <Dot className ="dot" id="4" name="autocad"/>
                                <Dot className ="dot" id="5" name="autocad"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ContentFieldRight 
                                title ="Video Editing" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Adobe Premier</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="adobePremier"/>
                                <Dot className ="dot blue" id="2" name="adobePremier"/>
                                <Dot className ="dot blue" id="3" name="adobePremier"/>
                                <Dot className ="dot blue" id="4" name="adobePremier"/>
                                <Dot className ="dot" id="5" name="adobePremier"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Movie Maker</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="movieMaker"/>
                                <Dot className ="dot blue" id="2" name="movieMaker"/>
                                <Dot className ="dot blue" id="3" name="movieMaker"/>
                                <Dot className ="dot blue" id="4" name="movieMaker"/>
                                <Dot className ="dot" id="5" name="movieMaker"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Pinnacle Studio</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="pinnacle"/>
                                <Dot className ="dot blue" id="2" name="pinnacle"/>
                                <Dot className ="dot blue" id="3" name="pinnacle"/>
                                <Dot className ="dot blue" id="4" name="pinnacle"/>
                                <Dot className ="dot" id="5" name="pinnacle"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin">
                    <div className="col-6">
                        <ContentFieldRight 
                        title ="Backend Programming" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Java (OOP, Redis, Rabbmit MQ, JWT, Hibernate, Spring, SpringBoot</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="java"/>
                                <Dot className ="dot blue" id="2" name="java"/>
                                <Dot className ="dot blue" id="3" name="java"/>
                                <Dot className ="dot blue" id="4" name="java"/>
                                <Dot className ="dot" id="5" name="java"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Node Js</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="nodeJs"/>
                                <Dot className ="dot blue" id="2" name="nodeJs"/>
                                <Dot className ="dot blue" id="3" name="nodeJs"/>
                                <Dot className ="dot" id="4" name="nodeJs"/>
                                <Dot className ="dot" id="5" name="nodeJs"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ContentFieldRight 
                                title ="FrontEnd Programming" />
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>HTML, CSS, JS </h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="html"/>
                                <Dot className ="dot blue" id="2" name="html"/>
                                <Dot className ="dot blue" id="3" name="html"/>
                                <Dot className ="dot blue" id="4" name="html"/>
                                <Dot className ="dot" id="5" name="html"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>Bootstrap , Materializecss</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="html"/>
                                <Dot className ="dot blue" id="2" name="html"/>
                                <Dot className ="dot blue" id="3" name="html"/>
                                <Dot className ="dot blue" id="4" name="html"/>
                                <Dot className ="dot" id="5" name="html"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-6">
                                 <h5>React</h5>
                            </div>
                            <div className = "col-6">
                                <Dot className ="dot blue" id="1" name="react"/>
                                <Dot className ="dot blue" id="2" name="react"/>
                                <Dot className ="dot blue" id="3" name="react"/>
                                <Dot className ="dot blue" id="4" name="react"/>
                                <Dot className ="dot" id="5" name="react"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div > 
         );
    }
}
 
export default Skill;