import React, { Component } from "react";
import { Link, Element } from 'react-scroll'

import FullPage from "../component/FullPage"
import data from '../data.json'
import DownIcon from "../component/DownIcon";



class AboutItem extends Component {
    render() {
        return (
            <div>
                <FullPage className="secend">
                    <h3>{data.sections[0].title}</h3>
                    <p>{data.sections[0].items[0].content}</p>
                </FullPage>
                
                <Link 
                    activeClass="active" 
                    to="Skils" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    onSetActive={this.handleSetActive}>
                    <DownIcon
                        icon={data.icons.down}
                        onClick={() => console.log("im working")}
                    />
                </Link>

                <Element 
                    name="Skils" 
                    className="element">
                </Element>
            </div>
        )
    }
}

export default AboutItem
