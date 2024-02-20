import React from 'react'
import './Layout.css'
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Menu } from 'primereact/menu';
import { menuSidebar } from '../../utils/constants/MenuLabels';
        


export default function Layout({ children }: { children: React.ReactNode }) {

    const [sidebar, setSidebar] = React.useState(true)
    const [sidebarClass, setSidebarClass] = React.useState('')

    const hideSidebar = () => {
        const status = sidebar
        setSidebar(!status)
        setSidebarClass(!status ? 'fadein' : 'fadeout')
        console.log(status)
    }




    return (
        <>
            <div className="block w-screen h-screen text-color">
                <div className="header h-5rem bg-white ">
                    <div className="flex ml-5 py-2 align-items-center">
                        <Image id='' src='/src/assets/logo-1.png' alt='logo' width='50'></Image>
                        <span className='ml-2 tittle'>Mi Presupuesto</span>
                        <Button className='ml-7 ' label='' icon='pi pi-ellipsis-v' link onClick={hideSidebar}></Button>
                    </div>
                </div>
                <div className="flex body-content m-5 ">

                    <div className={classNames(sidebarClass, 'sidebar flex border-round-xl bg-white')}  >
                       <Menu model={menuSidebar}></Menu>
                    </div>

                    <div className="content ml-3 w-full">
                        {children}
                    </div>
                </div>
                <div className="footer h-5rem ">footer</div>
            </div>
        </>
    )
}
