import React from "react"
import Button from "@material-ui/core/Button"
import SideMenu from "./SideMenu"
import "./Style.css"

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    render() {
        return(
            <div class="d-flex" id="wrapper">
                <SideMenu />
                <div id="page-content-wrapper">
                    <div class="container-fluid">
                        <h1 class="mt-4">{this.props.body}</h1>
                        <p>Lets  pull in something with an API here for more reactive Feel</p>
                        <p>So at this point, the React app increases the Number count by one in the 
                            <code>#page-content-wrapper</code>.
                            <p>whenever the "Create project" is being clicked!</p>
                        </p>
                    </div>
                </div>
            
            </div>
        )
    }
    
}
export default Content