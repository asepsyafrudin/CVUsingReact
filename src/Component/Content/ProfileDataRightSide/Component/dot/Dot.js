import React, { Component } from 'react';
import './Dot.css';

class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className : this.props.className
         }
    }

    // changeColor() {
    //     this.setState({className : 'dot blue'});
    // }

    render() { 

        let changeColor = (element) => {
            let name = document.querySelectorAll(`span[name = ${element.props.name}]`);
            
            let selectedDot = document.getElementById(element.props.id).id;

            for (let index = 0; index < name.length; index++) {
                 name[index].classList.remove("blue");
            }

            for (let index = 0; index < name.length; index++) {
                if(name[index].id === selectedDot) {
                    name[index].classList.add("blue");
                    break;
                } else {
                    name[index].classList.add("blue");
                } 
                
            }
        }
        return ( 
            <span className={this.state.className} onClick = {()=> {changeColor(this)}} id={this.props.id} name={this.props.name}></span>
         );
    }
}
 
export default Dot;