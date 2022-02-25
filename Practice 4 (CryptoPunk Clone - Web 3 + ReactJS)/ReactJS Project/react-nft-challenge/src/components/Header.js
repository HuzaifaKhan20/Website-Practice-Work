import React from 'react'
import './Header.css'
import punkLogo from '../assets/myHeader/cryptopunk-logo.png'
import searchIcon from '../assets/myHeader/search.png'
import themeSwitchIcon from '../assets/myHeader/theme-switch.png'

const Header = () => {
    return (
       <div className='my_header'>

           <div className='logoContainer'>
               <img src={punkLogo} className='punkLogo' alt='punkLogo' />
           </div>

           <div className='searchBar'>
               <div className='searchIconContainer'>
                    <img src={searchIcon} />
               </div>
               <input className='searchInput'
                placeholder='Collection, item or user...' />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} />
                </div>
            </div>
            <div className='loginButton'>
                GET IN
            </div>

        </div>
    )
}

export default Header
