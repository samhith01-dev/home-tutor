import { useMemo, useState } from 'react'
import { FilterBar } from '../components/FilterBar'
import { TutorCard } from '../components/TutorCard'
import { tutors } from '../state/mockTutors'

export function SearchPage() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [subject, setSubject] = useState('')

  const results = useMemo(() => {
    return tutors.filter((t) => {
      const matchesQuery = query
        ? [t.name, t.bio].join(' ').toLowerCase().includes(query.toLowerCase())
        : true
      const matchesLoc = location
        ? t.location.toLowerCase().includes(location.toLowerCase())
        : true
      const matchesSubject = subject
        ? t.subjects.some((s) => s.toLowerCase().includes(subject.toLowerCase()))
        : true
      return matchesQuery && matchesLoc && matchesSubject
    })
  }, [query, location, subject])

  return (
    <section>
      <h2>Find tutors</h2>
      <FilterBar
        query={query}
        location={location}
        subject={subject}
        onChange={(next) => {
          if (next.query !== undefined) setQuery(next.query)
          if (next.location !== undefined) setLocation(next.location)
          if (next.subject !== undefined) setSubject(next.subject)
        }}
      />
      <div className="grid">
        {results.map((t) => (
          <TutorCard key={t.id} tutor={t} />
        ))}
      </div>
    </section>
  )
}


