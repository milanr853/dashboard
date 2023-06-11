import { useState } from 'react'
import Layout from './components/Layout.jsx'
import Body from './components/Body.jsx'


function App() {

  return (
    <Layout children={<Body />} />
  )
}

export default App
