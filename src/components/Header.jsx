import "./header.scss"
import { useNavigate } from "react-router-dom"

export default function Header({ temaEscuro, setTemaEscuro }) {

  const navigate = useNavigate()

  return (
    <div className="header-container">

      <div className="header-links">
        <h2 onClick={() => navigate("/")}>TAREFAS</h2>
        <h2 onClick={() => navigate("/calendario")}>CALENDÁRIO</h2>
      </div>

      <div
        className={`toggle ${temaEscuro ? "ativo" : ""}`}
        onClick={() => setTemaEscuro(!temaEscuro)}
      >
        <div className="icone">{temaEscuro ? "🌙" : "☀️"}</div>
        <div className="bolinha"></div>
      </div>

    </div>
  );
}