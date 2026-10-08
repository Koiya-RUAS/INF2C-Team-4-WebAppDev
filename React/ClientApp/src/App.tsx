import { Link, Route, Routes } from "react-router-dom";
import ArmoryPage from "./pages/armoryPage";
import "./global.css";
import QuestPage from "./pages/questPage";

function ArchivePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="page">
      <nav className="sidebar">
        <h2>Hollowmere</h2>

        <div className="pages-on-menu">
          <Link to="/">Hall</Link>
          <Link to="/armory">Armory</Link>
          <Link to="/quest">Quest Board</Link>
          <Link to="/yard">Yard</Link>
          <Link to="/archive">Archive</Link>
          <Link to="/bestiary">Bestiary</Link>
        </div>
      </nav>

      <main className="content">
        <Routes>
            <Route path="/" element={<ArchivePage />} />
            <Route path="/armory" element={<ArmoryPage />} />
            <Route path="/quest" element={<QuestPage />} />
            <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
