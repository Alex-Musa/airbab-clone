import React from 'react'

import { Link } from 'react-router-dom'

import "./Header.css"

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className="header">

            <Link to='/'>
                <img 
                    className="header__icon" 
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032017/untitled-6_25.png?itok=9ZEI6gJ3" 
                    alt="" 
                />
            </Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                < ExpandMoreIcon />
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header
