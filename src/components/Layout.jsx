import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className='w-full h-screen flex'>
            <Sidebar />

            <div className="content w-[82%] h-full flex flex-col">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout