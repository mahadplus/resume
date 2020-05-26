import React, { Component } from "react"
import { Link, Element } from 'react-scroll'
import ThemeSwitcher from "react-theme-switcher";

import "./MenuBar.css"
import data from '../data.json'

class MenuBar extends Component{
    render(){
        return(
            <div>
                <div class="topnav">
                    <a href=""><Link activeClass="active" to="TitleSection" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Home</Link></a>
                    <a href=""><Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}> About</Link></a>
                    <a href=""><Link activeClass="active" to="Skils" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Skils</Link></a>
                    <a href="" style={{float : "right"}}><img src={data.icons.theme} alt="" style={{height : "27px"}}/></a>
                </div>
            </div>
        )
    }
}
export default MenuBar