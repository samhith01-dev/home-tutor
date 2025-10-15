import { Link } from 'react-router-dom'

export function DashboardPage() {
  const bookings = [
    { id: 'b1', tutor: 'Alice Johnson', date: '2025-10-20', time: '16:00' },
    { id: 'b2', tutor: 'Raj Kumar', date: '2025-10-24', time: '18:30' }
  ]

  return (
    <section>
      <h2>Your bookings</h2>
      <ul className="list">
        {bookings.map(b => (
          <li key={b.id} className="list-item">
            <span>{b.date} {b.time} — with {b.tutor}</span>
            <Link className="btn" to="/search">Find more tutors</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}


