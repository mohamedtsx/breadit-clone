import React from 'react'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n'
import { Icons } from './Icons'

import { buttonVariants } from './ui/Button'



const Navbar = () => {
  const t = useTranslations();

  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10'>
        <div className='container max-w-7xl flex justify-between gap-2 py-2'>
          <Link href='/' className='flex items-center gap-2'>
            <Icons.logo className='w-8 h-8 sm:w-6 sm:h-6'/>
            <p className='hidden text-zinc-700 text-sm font-medium md:block'>
              Breadit
            </p>
          </Link>

          {/* search bar */}
          
          <Link href='/login' className={buttonVariants()}>
            {t('Component.login')}
          </Link>
        </div>
    </div>
  )
}

export default Navbar