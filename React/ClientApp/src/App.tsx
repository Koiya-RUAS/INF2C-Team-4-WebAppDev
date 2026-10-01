import { Route, Routes } from "react-router-dom";
import ArmoryPage from "./pages/armoryPage"
import "./global.css";

function App() {
  return (
    <Routes>
    <Route path="/armory" element={<ArmoryPage />} />
    </Routes>
  );
}
export default App;