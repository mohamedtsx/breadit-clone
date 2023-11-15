import React from 'react'
import { Icons } from './Icons'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-300 border-b border-zinc-500'>
        <div className='container max-w-7xl flex justify-between py-2'>
          <Link href='/'>
            <Icons.logo className='w-12 h-12'/>
          </Link>
          Navbar
        </div>
    </div>
  )
}

export default Navbar