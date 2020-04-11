import React from 'react'
import Layout from '../components/MyLayout'
import Emoji from '../utils/emoji'

export default function Index () {
  return (
    <Layout>
      <div className="about-center">
        <header className="about-header">
          <span>Hi.</span>
          <span>My name is Mick.</span>
          <span>And this is my totally litty fresh site <Emoji symbol="🔥" label="fire"/></span>
        </header>
        <style jsx global>{`
        .about-header {
          align-items: center;
          background-color: #282c34;
          color: white;
          display: flex;
          flex-direction: column;
          font-size: calc(10px + 2vmin);
          justify-content: center;
          min-height: 100vh;
          }
         .about-center {
           text-align: center;
          } 
      `}</style>
      </div>
    </Layout>
  )
}