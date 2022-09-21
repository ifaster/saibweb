import { Link, useLocation } from "react-router-dom";
import { List } from "../../styles/styles";

export function Result() {

  const location = useLocation();

  return (
    <div style={{ background: "#4d0099", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
      <List>
        {location.state?.repos?.map((element, i) => {
          return <span key={i}>{element.full_name}</span>;
        })}
      </List>
      <Link
        to="/saibweb//Search"
        style={{ padding: "0.5rem 1rem", color: "#000", background: "yellow", borderRadius: "10px", fontWeight: "bold" }}
      >
        Voltar
      </Link>
    </div>
  );
}
