import React from 'react'

const Header = () => {
    return (
        <>
            <header>

                <a href="#" className="logo"><i className="fa-solid fa-building-columns"></i>Bank</a>

                <div id="menu-bar" className="fas fa-bars"></div>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#cards">cards</a>
                    <a href="#info">Info</a>

                </nav>

            </header>
        </>
    )
}

export default Header