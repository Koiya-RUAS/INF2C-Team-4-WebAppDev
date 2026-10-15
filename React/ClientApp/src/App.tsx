import { NavLink, Link, Route, Routes } from "react-router";
import ArmoryPage from "./pages/armoryPage";
import "./global.css";
import QuestPage from "./pages/questPage";
import Button from "./components/ui/button/button";
import GearDetailPage from "./pages/detailGear/gearDetailPage";
import { useState, useEffect } from "react";
import { Home, Sword, ScrollText, Trees, BookOpen, Bug, ChevronLeft, ChevronRight, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Hall", icon: Home },
  { to: "/armory", label: "Armory", icon: Sword },
  { to: "/quest", label: "Quest Board", icon: ScrollText },
  { to: "/yard", label: "Yard", icon: Trees },
  { to: "/archive", label: "Archive", icon: BookOpen },
  { to: "/bestiary", label: "Bestiary", icon: Bug },
]

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
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setCollapsed(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }),[];
  return (
    <div className="page">
      {isMobile && !collapsed && (
        <div className="sidebar-backdrop" onClick={() => setCollapsed(true)} />
      )}
      <nav className={`sidebar${collapsed ? " sidebar--collapsed" : ""}${isMobile ? " sidebar--mobile" : ""}`}>
        <div className="sidebar-header">
          {!collapsed && <h2>Hollowmere</h2>}
          <button className="sidebar-toggle" onClick={() => setCollapsed((c) => !c)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            {isMobile
            ? (collapsed ? <ChevronRight size={20} strokeWidth={1.8} /> : <X size={20} strokeWidth={1.8} />)
            : (collapsed ? <ChevronRight size={20} strokeWidth={1.8} /> : <ChevronLeft size={20} strokeWidth={1.8} />)}
          </button>
        </div>
        <div className="pages-on-menu">
          {navItems.map(({to, label, icon: Icon}) => (
            <NavLink key={to} to={to} title={collapsed ? label : undefined} onClick={() => isMobile && setCollapsed(true)}>
              <Icon size={18} className="nav-icon" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="content">
        <Routes>
            <Route path="/" element={<ArchivePage />} />
            <Route path="/armory" element={<ArmoryPage />} />
            <Route path="/quest" element={<QuestPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/armory/:id" element={<GearDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
