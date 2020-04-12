import React from 'react'
import Layout from '../components/MyLayout'
import Emoji from '../utils/emoji'
import Link from 'next/link'


const PostLink = props => {
  return (
  <li>
    <Link href="/learnings/[id]" as={`/learnings/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
  )
}


export default function Index () {
  return (
    <Layout>
      <div className="about-center">
        <header className="about-header">
          <span>Hi.</span>
          <span>My name is Mick.</span>
          <span>
            And this is my totally litty fresh site
            <Emoji symbol="🔥" label="fire"/>
          </span>
          <PostLink id="hello-nextjs"/>
          <PostLink id="learn-nextjs"/>
          <PostLink id="deploy-nextjs"/>
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