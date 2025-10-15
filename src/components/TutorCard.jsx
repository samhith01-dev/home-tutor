import { Link } from 'react-router-dom'

export function TutorCard({ tutor }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="avatar"
          src={tutor.avatarUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(tutor.name)}`}
          alt={tutor.name}
        />
        <div>
          <h3>{tutor.name}</h3>
          <div className="muted">{tutor.location}</div>
        </div>
        <div className="rating">⭐ {tutor.rating.toFixed(1)}</div>
      </div>
      <div className="card-body">
        <div className="subjects">
          {tutor.subjects.map(s => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
        <p className="bio">{tutor.bio}</p>
      </div>
      <div className="card-footer">
        <div className="price">${tutor.hourlyRate}/hr</div>
        <div className="actions">
          <Link className="btn" to={`/tutors/${tutor.id}`}>View</Link>
          <Link className="btn primary" to={`/booking/${tutor.id}`}>Book</Link>
        </div>
      </div>
    </div>
  )
}


