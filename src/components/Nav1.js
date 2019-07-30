import React from "react"
import Button from "@material-ui/core/Button"

function Nav1(props) {
    return(
        <div class ="App-header">
            <nav class="navbar navbar-light ">
                <form class="form-inline">
                    <div class="md-form my-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
                <Button variant="contained" color="primary" onClick={props.handlepick}>Create Project</Button>
                <Button variant="contained" color="primary" onClick={props.minus}>Reduce</Button>
                <Button variant="contained" color="primary" onClick={props.reset}>Reset</Button>
            </nav>
        </div>
    )
}



export default Nav1