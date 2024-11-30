import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
      <ul className='flex gap-x-3 justify-end'>
       <div>
        <Link href="/"> <li>home</li></Link>      
       </div>
       <div>
        <Link href="/contact"> <li>contact</li></Link>      
       </div>
       <div>
        <Link href="/about"> <li>about</li></Link>      
       </div>
      </ul>
    </div>
  )
}

export default Navbar
