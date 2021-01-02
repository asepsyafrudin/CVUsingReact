import React, { Component } from 'react';
import WorkingExperience from './WorkingExperience/WorkingExperience';
import Education from './Education/Education';
import Skill from './Skill/Skill';

class ProfileDataRightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <WorkingExperience />
                <Education />
                <Skill />
            </div>
         );
    }
}
 
export default ProfileDataRightSide;