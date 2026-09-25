import Button from "./components/ui/button/button";
import "./global.css";

function App() {
  return (
    <div className="ButtonsComponent" style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <Button size="small">Primary Knop</Button>
      <Button variant="secondary" size="medium">Secondary Knop</Button>
      <Button variant="danger" size="medium">Danger Knop</Button>
      <Button variant="success" size="medium">Success Knop</Button>
   </div>
  );
}
export default App;