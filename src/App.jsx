import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './components/Auth'
import Account from './components/Account'
import Upload from './components/Upload'
import Logo from './components/Logo'


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    
    <div className="App">
      <nav className="top-bar">
        <Logo />
        <div className="auth-container" style={{ padding: '50px 0 100px 0' }}>
          {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
        </div>
      </nav>
      
      <Upload />

    </div>
  )
}

export default App
