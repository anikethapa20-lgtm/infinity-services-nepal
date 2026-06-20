import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function MediaGallery({ section = 'portfolio', limit = 9 }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadMedia() {
      if (!supabase) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('media_assets')
        .select('id, title, alt_text, image_url')
        .eq('published', true)
        .eq('section', section)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (!active) return

      if (error) {
        console.error('Media gallery error:', error)
        setItems([])
      } else {
        setItems(data || [])
      }

      setLoading(false)
    }

    loadMedia()

    return () => {
      active = false
    }
  }, [section, limit])

  if (loading || items.length === 0) {
    return null
  }

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Project Gallery</span>
            <h2>Recent work and moments.</h2>
          </div>
          <p>
            Photos uploaded securely through the Infinity Services admin area.
          </p>
        </div>

        <div className="media-gallery-grid">
          {items.map((item) => (
            <figure className="media-gallery-card" key={item.id}>
              <img
                src={item.image_url}
                alt={item.alt_text || item.title || 'Infinity Services project'}
                loading="lazy"
              />

              {item.title && (
                <figcaption>{item.title}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
