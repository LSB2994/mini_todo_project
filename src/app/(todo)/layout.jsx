import AddNewTaskComponent from '@/components/AddNewTaskComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='flex'>
        <div><SidebarComponent/></div>
        <div className='w-full ml-[30px]'>
            <NavbarComponent/>
            <div className='mt-5 p-5'>
                <ListBoardComponentHeader/>
                {children}
                <div className='float-end p-5'>
                    <AddNewTaskComponent/>
                </div>  
            </div>
        </div>
    </div>
  )
}
