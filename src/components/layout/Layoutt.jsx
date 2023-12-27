import React from 'react'
import Navbar from '../navbar/Navbarr'
import Footer from '../footer/Footer'

function Layoutt({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layoutt