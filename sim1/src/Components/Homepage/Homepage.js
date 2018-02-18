import React, {Component} from 'react';
import logo from "./logo.png";
import Shelf from './../Shelf/Shelf';

class Homepage extends Component{
    render() {
        return(
            <div>
            <div class="Shelves_header">
                <div class="Shelves_header_content">
                <img src={logo} class="logo" alt="logo"/>
                <span class="Shelves_header_span"> SHELFIE</span>
                <Shelf />
                </div>
                </div>
            </div>    
            
        )
    }
}



export default Homepage;