import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex items-center justify-between w-[1200px]' >
        <div className='w-[250px]'>
          <p>TODO</p>
          <hr className='w-[310px]  text-blue-500' />
        </div>
        <div className='w-[250px]'>
          <p>WORKING ON</p>
          <hr className='w-[310px]  text-blue-500' />
        </div>
        <div className='w-[250px]'>
          <p>CHECKING</p>
          <hr className='w-[310px]  text-blue-500' />
        </div>
        <div className='w-[250px]'>
          <p>COMPLETE</p>
          <hr className='w-[310px]  text-blue-500' />
        </div>
      </div>
      <TodoCardComponent/>
    </div>
  )
}
