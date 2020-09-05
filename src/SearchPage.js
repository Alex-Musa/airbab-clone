import React from 'react'

import "./SearchPage.css"
import { Button } from '@material-ui/core'

import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august. 2 guest</p>
                <h1>Stays nearby</h1>

                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>

                <Button variant="outlined">
                    Type of place
                </Button>

                <Button variant="outlined">
                    Price
                </Button>

                <Button variant="outlined">
                    Rooms and Beds
                </Button>

                <Button variant="outlined">
                    More Filters
                </Button>
            </div>
            <SearchResult 
                img="https://media.nomadicmatt.com/2018/apartment.jpg"
                location="Private room in Kansas City"
                title="Stay at this spacious Edwardian house"
                description="1 guest . 1 bedroom . 1 bed. 1.5 shared bathroom . wifi . Kitchen . Free Parking"
                star={4.85}
                price="$50 / night"
                total="$200 total"
            />

            <SearchResult 
                img="https://media.nomadicmatt.com/2018/apartment.jpg"
                location="Private room in Kansas City"
                title="Stay at this spacious Edwardian house"
                description="1 guest . 1 bedroom . 1 bed. 1.5 shared bathroom . wifi . Kitchen . Free Parking"
                star={4.85}
                price="$50 / night"
                total="$200 total"
            />

            <SearchResult 
                img="https://media.nomadicmatt.com/2018/apartment.jpg"
                location="Private room in Kansas City"
                title="Stay at this spacious Edwardian house"
                description="1 guest . 1 bedroom . 1 bed. 1.5 shared bathroom . wifi . Kitchen . Free Parking"
                star={4.85}
                price="$50 / night"
                total="$200 total"
            />

            <SearchResult 
                img="https://media.nomadicmatt.com/2018/apartment.jpg"
                location="Private room in Kansas City"
                title="Stay at this spacious Edwardian house"
                description="1 guest . 1 bedroom . 1 bed. 1.5 shared bathroom . wifi . Kitchen . Free Parking"
                star={4.85}
                price="$50 / night"
                total="$200 total"
            />
            
        </div>
    )
}

export default SearchPage
