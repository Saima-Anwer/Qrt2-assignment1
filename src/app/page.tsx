import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/Service">service</Link></li>
      </ul>
      <h1>This is my Home page</h1>
    </div>
  )
}

export default HomePage

 