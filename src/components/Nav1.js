import React from "react"

function Nav1(props) {
    return(
        <div class ="App-header">
            <nav class="navbar navbar-light ">
                <form class="form-inline">
                    <div class="md-form my-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
                <button class="btn btn-danger btn-md my-2 my-sm-0 ml-3 zinox" onClick={props.handlepick}>Create Project</button>
            </nav>
        </div>
    )
}



export default Nav1