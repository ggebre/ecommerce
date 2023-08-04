import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
    return (
            <div className='layout'>
                <header>
                    <Navbar />
                </header>
                <main className='main-container'>
                    
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
    )
}

export default Layout;