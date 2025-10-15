import { Link, useParams } from 'react-router-dom'
import { tutors } from '../state/mockTutors'

export function TutorProfilePage() {
  const { tutorId } = useParams()
  const tutor = tutors.find(t => t.id === tutorId)

  if (!tutor) {
    return <div>Not found.</div>
  }

  return (
    <section>
      <div className="profile-header">
        <img className="avatar lg" src={tutor.avatarUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(tutor.name)}`} />
        <div>
          <h2>{tutor.name}</h2>
          <div className="muted">{tutor.location} • ⭐ {tutor.rating.toFixed(1)}</div>
          <div className="subjects">
            {tutor.subjects.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
      </div>
      <p className="bio">{tutor.bio}</p>
      <div className="profile-actions">
        <Link to={`/booking/${tutor.id}`} className="btn primary">Book a session</Link>
      </div>
    </section>
  )
}


