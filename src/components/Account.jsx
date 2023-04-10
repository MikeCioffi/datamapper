import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session

      setLoading(false)
    }

    getProfile()
  }, [session])

  async function updateProfile(event) {
    event.preventDefault()

    setLoading(true)
    const { user } = session

    const updates = {
      id: user.id,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <br></br>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </form>
  )
}