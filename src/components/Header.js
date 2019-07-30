import React from "react"
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"

function Header(props) {
    return(
        <header>
            <Nav1 handlepick = {props.handlepick} minus={props.minus} reset={props.reset}/>
            <Nav2 />
        </header>
    )
}

export default Header