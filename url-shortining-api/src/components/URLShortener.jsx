import { useState } from 'react'

export default function URLShortener() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [shortenedLinks, setShortenedLinks] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!url) {
      setError('Please add a link')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      const data = await response.json()
      
      if (data.ok) {
        setShortenedLinks([
          { original: url, shortened: data.result.short_link },
          ...shortenedLinks
        ])
        setUrl('')
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="relativ container mx-auto px-6">
      <div className=" -top-20 left-6 right-6">
        <div className="bg-primary-dark-violet bg-[url('/bg-shorten-desktop.svg')] bg-cover rounded-lg p-6 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="url"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`w-full p-3 rounded-lg font-poppins text-body ${
                  error ? 'border-2 border-secondary-red placeholder-secondary-red' : ''
                }`}
              />
              {error && <p className="text-secondary-red text-sm mt-1 italic">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-cyan hover:opacity-70 text-white font-poppins font-bold py-3 px-8 rounded-lg"
            >
              {isLoading ? 'Shortening...' : 'Shorten It!'}
            </button>
          </form>
        </div>

        <div className="mt-6 space-y-4">
          {shortenedLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-lg p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-neutral-very-dark-violet font-poppins border-b md:border-0 pb-3 md:pb-0">
                {link.original}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-3 pt-3 md:pt-0">
                <p className="text-primary-cyan font-poppins">{link.shortened}</p>
                <button
                  onClick={() => copyToClipboard(link.shortened)}
                  className="bg-primary-cyan hover:opacity-70 text-white font-poppins font-bold py-2 px-6 rounded-lg"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
