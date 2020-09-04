import React, { useState } from 'react'
import './Banner.css'

import Search from  './Search'

import {Button} from '@material-ui/core'

function Banner() {

    const [showSearch, SetshowSearch] = useState(false);



    return (
        <div className="banner">

            <div className="banner__search">
                

                <Button onClick={() => SetshowSearch(!showSearch)}
                className="banner__searchButton" 
                variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                
                {showSearch && <Search />} {/* Showing DatePicker */}
            </div>

            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a differnet kinf of getway to uncover the hidden gems near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
