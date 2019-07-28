import React from "react"
import "./side.css"

function SideMenu(props) {
    return(
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading"><strong>Zigla</strong></div>
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action bg-light"><i class="icon-dashboard"></i>Dashboard</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Notifications</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Teams</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Projects</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Bookmark</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Chat</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">settings</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Help</a>
                </div>
                <i class="icon-dashboard"></i>
            </div>
    )
}


export default SideMenu