import { useState } from 'react'
import Upload from './components/Upload'
import Logo from './components/Logo'
import './App.css'

function App() {



  return (
    <div className="App">
      <Logo />
      <h1 className="text-3xl font-bold underline">
        Welcome to Dora!
      </h1>
      <p>(cause we got the map ya bish)</p>
      <Upload />

    </div>
  )
}

export default App
