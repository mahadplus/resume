import React, { Component } from "react"
import { SocialIcon } from 'react-social-icons'
import { Link, Element } from 'react-scroll'

import DownIcon from "../component/DownIcon"
import FullPage from "../component/FullPage"
import data from '../data.json'
import "./TitleSection.css"


class TitleAndItems extends Component {
    render() {
        return (
            <div>
                <Element name="TitleSection" className="element">
                </Element>
                <FullPage className="first">
                    <img src={data.Avatar} alt="Avatar" className="avatar"></img>
                    <div className="title">
                        <div>
                            <h1>{data.title}</h1>
                            <h2>{data.subtitle}</h2>
                        </div>
                        <div className="icons-wapper">
                            {
                                Object.keys(data.links).map(key => {
                                    return (
                                        <div className="icon"><SocialIcon url={data.links[key]} /></div>
                                    )
                                })
                            }
                        </div>
                    </div>   
                </FullPage>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon
                        icon={data.icons.down}
                    />
                </Link>
                <Element name="About" className="element">
                </Element>
                
                
            </div>
        )
    }
}

export default TitleAndItems
