import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { tutors } from '../state/mockTutors'

export function BookingPage() {
  const { tutorId } = useParams()
  const tutor = tutors.find(t => t.id === tutorId)
  const navigate = useNavigate()
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')

  if (!tutor) return <div>Not found.</div>

  const submit = (e) => {
    e.preventDefault()
    alert(`Booked ${tutor.name} on ${date} at ${time}`)
    navigate('/dashboard')
  }

  return (
    <section>
      <h2>Book a session with {tutor.name}</h2>
      <form className="form" onSubmit={submit}>
        <label>
          <span>Date</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          <span>Time</span>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <label>
          <span>Notes</span>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Topics, goals, etc." />
        </label>
        <button className="btn primary" type="submit">Confirm Booking</button>
      </form>
    </section>
  )
}


