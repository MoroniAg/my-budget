import React from 'react'
import './Layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="block w-screen h-screen text-color">
                <div className="header h-5rem bg-white ">header</div>
                <div className="flex body-content m-5 ">
                    <div className="sidebar border-round-xl bg-white w-15rem p-3 mr-3">sidebar</div>
                    <div className="content ml-3 w-full">
                        {children}
                    </div>
                </div>
                <div className="footer h-5rem ">footer</div>
            </div>
        </>
    )
}
