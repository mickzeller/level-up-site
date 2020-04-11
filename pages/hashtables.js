import Emoji from '../utils/emoji'
import React from 'react'
import Layout from '../components/MyLayout';

export default function Hashtables() {
  return (
    <Layout>
    <div className="about-center">
      <header className="about-header">
        <span>And this is my totally litty fresh site <Emoji symbol="🔥" label="fire"/></span>
      </header>
      <style jsx>{`
        .about-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
          }
         .about-center {
           text-align: center;
          } 
      `}</style>
    </div>
    </Layout>
  );
}