'use client'

import Link from 'next/link'
import '@/app/ui/global.css'
import { House, LogIn, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

export default function NavigationBar() {
  const pathname = usePathname()
  return (
    <>
      <div className="fixed z-50 flex h-20 w-screen flex-none flex-row content-center items-center bg-sky-400 p-2 text-gray-800 shadow-md shadow-black dark:bg-mist-800 dark:text-white">
        <div className="flex h-15 w-40 items-center justify-start">
          <Link
            href={''}
            className={clsx(
              'mx-2 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '',
              }
            )}
          >
            <Menu />
          </Link>
        </div>
        <div className="flex h-15 grow content-center items-center justify-center">
          <Link
            href="/dashboard"
            className={clsx(
              'mx-1 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '/dashboard',
              }
            )}
          >
            <House />
          </Link>
          <Link
            href="/dashboard/riku"
            className={clsx(
              'mx-1 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '/dashboard/riku',
              }
            )}
          >
            Riku
          </Link>
          <Link
            href="/dashboard/rio"
            className={clsx(
              'mx-1 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '/dashboard/rio',
              }
            )}
          >
            Rio
          </Link>
          <Link
            href="/dashboard/user-administration"
            className={clsx(
              'mx-1 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '/dashboard/user-administration',
              }
            )}
          >
            User <br />
            administration
          </Link>
        </div>
        <div className="flex h-15 w-40 justify-end">
          <Link
            href="/dashboard/login"
            className={clsx(
              'mx-2 w-fit content-center rounded-xl p-2 text-center hover:bg-blue-400 dark:hover:bg-mist-500',
              {
                'bg-cyan-400 shadow-sm shadow-black/30 dark:bg-mist-700':
                  pathname === '/dashboard/login',
              }
            )}
          >
            <LogIn />
          </Link>
        </div>
      </div>
    </>
  )
}
