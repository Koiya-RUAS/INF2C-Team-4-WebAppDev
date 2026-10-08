function App() {
  return (
      <div className="page">
          
          <nav className="sidebar">
              <h2>Hollowmere</h2>

              <div className="pages-on-menu">
                  <a href="#">Hall</a>
                  <a href="#">Armory</a>
                  <a href="#">Quest Board</a>
                  <a href="#">Yard</a>
                  <a href="#">Archive</a>
                  <a href="#">Bestiary</a>
              </div>
          </nav>

          <main className="content">

              <div className="page-header">
                  <div>
                      <h1>Archive</h1>
                      <p>Your Reports</p>
                  </div>

                  <button>Add Report</button>
              </div>

              <div className="reports">
                  <div className="report-card">
                      <h3>The Marsh Expedition</h3>
                      <p>Written by: Aragorn</p>
                      <p>Region: Western Marsh</p>
                      <p>Departure: 12 March 2026</p>
                      <p>Status: Filed</p>
                  </div>
              </div>

                  <div className="report-card">
                      <h3>The Haunted Mill</h3>
                      <p>Written by: Legolas</p>
                      <p>Region: Ford Valley</p>
                      <p>Departure: 18 March 2026</p>
                      <p>Status: Draft</p>
                  </div>
          </main>
      </div>
  )
}

export default App