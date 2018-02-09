import React, {Component} from 'react';
import logo from "./logo.png";

class Homepage extends Component{
    render() {
        return(
            <div>
            <div class="Shelves_header">
                <div class="Shelves_header_content">
                <img src={logo} class="logo"/>
                <span class="Shelves_header_span"> SHELFIE</span>
                </div>
                </div>
            </div>    
            
        )
    }
}



export default Homepage;