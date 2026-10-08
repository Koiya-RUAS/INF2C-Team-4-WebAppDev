import { NavLink, Link, Route, Routes } from "react-router";
import ArmoryPage from "./pages/armoryPage";
import "./global.css";
import QuestPage from "./pages/questPage";
import Button from "./components/ui/button/button";

function ArchivePage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Archive</h1>
          <p>Your Reports</p>
        </div>

        <Button>Add Report</Button>
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
          <NavLink to="/">Hall</NavLink>
          <NavLink to="/armory">Armory</NavLink>
          <NavLink to="/quest">Quest Board</NavLink>
          <NavLink to="/yard">Yard</NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/bestiary">Bestiary</NavLink>
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
