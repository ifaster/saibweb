import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "../../styles/styles";

export function Search() {
  const [nameUserRepo, setNameUserRepo] = useState(" ");
  const navigate = useNavigate();

  async function handleLoadRepo() {
    try {
      if(nameUserRepo) {
        const response = await axios(
          `https://api.github.com/users/${nameUserRepo}/repos`
        );
        navigate("/Result", {state: {repos: response.data}})
      } else {
        alert("Informe o nome do usuário")
      }  
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h1>Digite o nome de usuário do github para buscar os repositórios</h1>
      <input
        placeholder="Nome de usuário"
        type="text"
        onChange={(e) => setNameUserRepo(e.target.value)}
      />
      <button onClick={handleLoadRepo}>Buscar repos</button>
      <Link to="/">Voltar</Link>
    </Container>
  );
}
