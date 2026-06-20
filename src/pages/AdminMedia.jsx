import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { LogOut, Trash2, Upload } from 'lucide-react'
import { supabase } from '../lib/supabase'

const initialForm = {
  title: '',
  altText: '',
  section: 'portfolio'
}

export default function AdminMedia() {
  const [session, setSession] = useState(null)
  const [checkingSession, setCheckingSession] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [form, setForm] = useState(initialForm)
  const [file, setFile] = useState(null)
  const [items, setItems] = useState([])
  const [message, setMessage] = useState('')
  const [working, setWorking] = useState(false)

  useEffect(() => {
    if (!supabase) {
      setCheckingSession(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setCheckingSession(false)
    })

    const { data } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession)
      }
    )

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (session) {
      loadItems()
    }
  }, [session])

  async function loadItems() {
    const { data, error } = await supabase
      .from('media_assets')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setMessage(error.message)
      return
    }

    setItems(data || [])
  }

  async function handleLogin(event) {
    event.preventDefault()
    setWorking(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setWorking(false)

    if (error) {
      setMessage(error.message)
    }
  }

  async function handleUpload(event) {
    event.preventDefault()

    if (!file) {
      setMessage('Choose an image first.')
      return
    }

    setWorking(true)
    setMessage('')

    const safeName = file.name
      .toLowerCase()
      .replace(/[^a-z0-9.]+/g, '-')
      .replace(/^-|-$/g, '')

    const storagePath =
      session.user.id + '/' + Date.now() + '-' + safeName

    const { error: uploadError } = await supabase
      .storage
      .from('website-media')
      .upload(storagePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      })

    if (uploadError) {
      setWorking(false)
      setMessage(uploadError.message)
      return
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('website-media')
      .getPublicUrl(storagePath)

    const { error: insertError } = await supabase
      .from('media_assets')
      .insert({
        title: form.title.trim() || null,
        alt_text: form.altText.trim() || null,
        section: form.section,
        image_url: publicUrlData.publicUrl,
        storage_path: storagePath,
        published: true,
        created_by: session.user.id
      })

    setWorking(false)

    if (insertError) {
      setMessage(insertError.message)
      return
    }

    setForm(initialForm)
    setFile(null)
    setMessage('Image uploaded successfully.')
    await loadItems()
  }

  async function handleDelete(item) {
    const confirmed = window.confirm(
      'Delete this image from the website?'
    )

    if (!confirmed) return

    setWorking(true)
    setMessage('')

    const { error: storageError } = await supabase
      .storage
      .from('website-media')
      .remove([item.storage_path])

    if (storageError) {
      setWorking(false)
      setMessage(storageError.message)
      return
    }

    const { error: deleteError } = await supabase
      .from('media_assets')
      .delete()
      .eq('id', item.id)

    setWorking(false)

    if (deleteError) {
      setMessage(deleteError.message)
      return
    }

    setMessage('Image deleted.')
    await loadItems()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  if (!supabase) {
    return (
      <section className="page-hero admin-message-page">
        <div className="container">
          <span className="eyebrow">Admin Setup Required</span>
          <h1>Connect Supabase to use the media manager.</h1>
          <p>
            Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Netlify.
          </p>
        </div>
      </section>
    )
  }

  if (checkingSession) {
    return null
  }

  if (!session) {
    return (
      <section className="admin-login-page">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <span className="eyebrow">Infinity Services Admin</span>
          <h1>Media login</h1>
          <p>
            Sign in to upload and manage website photographs.
          </p>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <button className="btn" type="submit" disabled={working}>
            {working ? 'Signing in...' : 'Sign In'}
          </button>

          {message && <p className="form-status">{message}</p>}
        </form>
      </section>
    )
  }

  return (
    <section className="admin-media-page">
      <div className="container">
        <div className="admin-media-header">
          <div>
            <span className="eyebrow">Website Administration</span>
            <h1>Media manager</h1>
            <p>Upload images that will appear in the public project gallery.</p>
          </div>

          <button className="admin-logout" onClick={handleLogout} type="button">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        <div className="admin-media-layout">
          <form className="admin-upload-card" onSubmit={handleUpload}>
            <h2>Add a photograph</h2>

            <label>
              Image title
              <input
                value={form.title}
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                placeholder="Conference setup"
              />
            </label>

            <label>
              Alternative text
              <input
                value={form.altText}
                onChange={(event) =>
                  setForm({ ...form, altText: event.target.value })
                }
                placeholder="Describe the image for accessibility"
              />
            </label>

            <label>
              Website section
              <select
                value={form.section}
                onChange={(event) =>
                  setForm({ ...form, section: event.target.value })
                }
              >
                <option value="portfolio">Project Gallery</option>
                <option value="events">Events</option>
                <option value="printing">Printing</option>
                <option value="travel">Travel</option>
                <option value="branding">Branding</option>
              </select>
            </label>

            <label>
              Photograph
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => setFile(event.target.files?.[0] || null)}
                required
              />
            </label>

            <button className="btn" type="submit" disabled={working}>
              <Upload size={18} />
              {working ? 'Uploading...' : 'Upload Image'}
            </button>

            {message && <p className="form-status">{message}</p>}
          </form>

          <div className="admin-library">
            <h2>Uploaded photographs</h2>

            {items.length === 0 ? (
              <p>No photographs have been uploaded yet.</p>
            ) : (
              <div className="admin-media-grid">
                {items.map((item) => (
                  <article className="admin-media-card" key={item.id}>
                    <img src={item.image_url} alt={item.alt_text || item.title || ''} />
                    <div>
                      <strong>{item.title || 'Untitled image'}</strong>
                      <small>{item.section}</small>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(item)}
                      aria-label="Delete image"
                    >
                      <Trash2 size={17} />
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
