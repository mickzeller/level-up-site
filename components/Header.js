import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="banner">
      <Link href="/">
        <a className="linkStyle">Home</a>
      </Link>
      <Link href="/hashtables">
        <a className="linkStyle">Hashtables</a>
      </Link>
      <style jsx>{`
        .banner {
          align-items: center;
          background: #282c34;
          color: #fff;
          display: flex;
          height: 50px;
          width: 100%;
        }
        .linkStyle {
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
          text-align: center;
          line-height: 1.65;
          font-size: 20px;
          font-weight: 400;
          min-width: 320px;
          direction: ltr;
          font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </div>
  )
};

export default Header;