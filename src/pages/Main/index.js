import { Link } from "react-router-dom";

export function Main() {

  return (
    <div style={{ background: "#4d0099", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
      <h1 style={{ color: "#fff" }}>Página com styles apenas no jsx</h1>
      <Link to="/Search" style={{ background: "yellow", padding: "0.5rem 1rem", border: "0", outline: "none", marginTop: "2rem", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer"}}>Começar</Link>
    </div>
  );
}
