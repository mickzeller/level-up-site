import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout'
import React from 'react'

export default function Post () {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is a blog comment</p>
    </Layout>
  );
}