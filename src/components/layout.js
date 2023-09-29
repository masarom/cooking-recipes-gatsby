import * as React from 'react'
import { Link } from 'gatsby'
import { container,  heading,
  navLinks,
  navLinkItem,
  navLinkText } from './layout.module.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout