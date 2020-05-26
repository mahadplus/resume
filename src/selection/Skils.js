import React, { Component } from "react"
import { Link, Element } from 'react-scroll'

import DownIcon from "../component/DownIcon"
import FullPage from "../component/FullPage"
import data from '../data.json'
import "./Skils.css"


class Skils extends Component {
    render() {
        return (
            <div>
                <FullPage className="third">
                    <h3>{data.sections[1].title}</h3>
                    <dir className="cards-wapper">
                        {data.sections[1].items.map(Skil =>{
                            return(
                                <div className="card">
                                    <div className="image-wapper">
                                        <img src={Skil.content.image}/>
                                    </div>
                                    <div className="skill-title-wapper">
                                        <h4>{Skil.content.tilte}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </dir>
                </FullPage>
                <Link activeClass="active" to="TitleSection" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon
                        icon={data.icons.up} 
                    />
                </Link>
                
            </div>
        )
    }
}

export default Skils
