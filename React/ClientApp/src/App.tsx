import { Route, Routes } from "react-router-dom";
import ArmoryPage from "./pages/armoryPage";
import "./global.css";
import QuestPage from "./pages/questPage";

function App() {
  return (
    <Routes>
      <Route path="/armory" element={<ArmoryPage />} />
      <Route path="/quest" element={<QuestPage />} />
    </Routes>
  );
}
export default App;
