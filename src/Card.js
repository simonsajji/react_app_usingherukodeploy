import React, {Component} from "react"

import "./Card.css";
import App from "./App.js"
import "./Pep-Guardiola.jpg"



class Card extends Component{

    constructor(props){
        super(props);

    }

  


    render(){
        return(
            <div className="Card_ctn">
                    <img class="JobRole" src={this.props.jobrole} alt="nothimg"/>
                    <div className="JD">{this.props.description}</div>
                    <div className="Readmore">{this.props.more}</div>
            </div>

        )
    }
}


export default Card;
