import Link from 'next/link'
import React, { FC } from 'react'

type LinksType = {
  links: string[]
}

const Navbar:FC<LinksType> = ({links}) => {
  return (
    <nav>
        <ul className='flex justify-between items-center w-[570px]'>
            {links.map(link => (
              <li key={link}>
                <Link href={`/`}>
                <a>#{link}</a>
                </Link>
              </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar