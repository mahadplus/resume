import React, { Component } from "react"
import "./DownIcon.css"

const DownIcon = (props) => {
    return (
        <div className="divdown" onClick={props.onClick}>
            <div>
                <img src={props.icon} alt="" className="imgdown" />
            </div>
        </div>
    )
}

export default DownIcon