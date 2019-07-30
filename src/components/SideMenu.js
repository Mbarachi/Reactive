import React from "react"
import Dashboard from '@material-ui/icons/Dashboard'
import "./Style.css"

function SideMenu() {
    return(
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading"><strong>Zigla</strong></div>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Dashboard</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Notifications</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Teams</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Projects</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Bookmark</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Chat</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">settings</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light elements">Help</a>
                    
                </div>
            </div>
    )
}


export default SideMenu