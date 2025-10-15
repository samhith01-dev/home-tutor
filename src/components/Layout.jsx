import { Link, NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="app-shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="brand">HomeTutor</Link>
          <nav className="nav-links">
            <NavLink to="/search">Find Tutors</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} HomeTutor</div>
      </footer>
    </div>
  )
}


