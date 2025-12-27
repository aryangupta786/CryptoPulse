'use client'

import Link from "next/link"
import Image from "next/image"
import cn from "classnames"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <Image
            src="assets/logo.svg"
            alt="CoinPulse logo"
            width={132}
            height={40}
          />
        </Link>

        <nav>
          <Link
            href="/"
            className={cn('nav-link', {
              'is-active': pathname === '/',
              'is-home': true,
            })}
          >
            Home
          </Link>

          <p>Search Modal</p>

          <Link
            href="/coins"
            className={cn('nav-link', {
              'is-active': pathname === '/coins',
              'is-home': true,
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
