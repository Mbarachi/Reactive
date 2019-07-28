import React from "react"

function Content(props) {
    return(
        <div>
            <h1>{props.heading}</h1>
            <button class="btn btn-danger" onClick={props.content}>click it</button>
        </div>
    )
}
export default Content