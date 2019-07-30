import React from "react"
import Button from "@material-ui/core/Button"
import SideMenu from "./SideMenu"
import "./Style.css"

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            character: {}
        }
    }

componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.co/api/starships/9/")
    .then(response => response.json())
    .then(data => {
        this.setState({
            character : data,
            loading: false
        })
        console.log(this.state.character)
    })
}
    
    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return(
            <div class="d-flex" id="wrapper">
                <SideMenu />
                <div id="page-content-wrapper">
                    <div class="container-fluid">
                        <h1 class="mt-4">{this.props.body}</h1>
                        <p>Lets  pull in something with an API here for more reactive Feel</p>
                        <h3>{text}</h3>
                        <h4>{this.state.character.manufacturer}</h4>
                        <p style={{color: "brown"}}>Starship-Class: {this.state.character.starship_class}</p>
                        <hr/>
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