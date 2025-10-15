export function FilterBar({ query, location, subject, onChange }) {
  return (
    <div className="filter-bar">
      <input
        placeholder="Search by name or keyword"
        value={query}
        onChange={(e) => onChange({ query: e.target.value })}
      />
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => onChange({ location: e.target.value })}
      />
      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => onChange({ subject: e.target.value })}
      />
    </div>
  )
}


