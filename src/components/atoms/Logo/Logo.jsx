import React from 'react'
import { Link } from 'react-router-dom';


const Logo = () => {

    return (
        <Link to="/">
            <img src='./logo.png' alt='Logo' />
        </Link>
    )
}

export default Logo