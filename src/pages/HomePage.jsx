import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="hero">
      <h1>Find the perfect home tutor</h1>
      <p>Search qualified tutors for any subject, any level, anywhere.</p>
      <Link to="/search" className="btn primary">Start Searching</Link>
    </section>
  )
}


