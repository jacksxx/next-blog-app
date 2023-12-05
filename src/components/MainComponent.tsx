import React, { ReactNode } from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

const MainComponent = ({ children }: { children: ReactNode }) => {    
    return (
        <div>
            <Navbar />
            <div className='px-10 pt-2'>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default MainComponent