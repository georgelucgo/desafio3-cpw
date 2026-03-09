import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "./componentes.scss";
import Modal from "./components/Modal";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

function App({ temaEscuro }) {
  const navigate = useNavigate();
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade",
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, novaTarefa]); //ccria nova lista + o que foi add
    setNovaTarefa("");
  }

  function editarTarefa(index) {
    const novoTexto = prompt("Editar tarefa:", tarefas[index]);

    if (!novoTexto || !novoTexto.trim()) return;

    const novaLista = [...tarefas];
    novaLista[index] = novoTexto;

    setTarefas(novaLista);
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index)); //mantém tudo que for diferente do índice clicado.
  }

  function visualizarTarefa(tarefa) {
    setTarefaSelecionada(tarefa);
    setModalAberto(true);
  }

  function truncar(texto, limite) {
    return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
  }

  return (
    <div className="container">
      <h1 className="titulo">Minhas Tarefas</h1>

      {/* Toggle tema */}

      {/* Botão que leva para Componentes Legais */}
      {/* <button className="botao" onClick={() => navigate("/componentes")}>
          Componentes Uteis
        </button> */}

      <div className="area-input">
        <input
          className="input-tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione uma tarefa"
        />
        <button className="botao botao-adicionar" onClick={adicionarTarefa}>
          Adicionar tarefa
        </button>
      </div>

      {tarefas.map((tarefa, index) => (
        <div className="card" key={index}>
          <span>{truncar(tarefa, 60)}</span>

          <div className="acoes">
            <button
              className="botao botao-editar"
              onClick={() => editarTarefa(index)}
            >
              <FaEdit />
            </button>

            <button
              className="botao botao-visualizar"
              onClick={() => visualizarTarefa(tarefa)}
            >
              <FaEye />
            </button>

            <button
              className="botao botao-remover"
              onClick={() => removerTarefa(index)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      <Modal
        aberto={modalAberto}
        tarefa={tarefaSelecionada}
        fechar={() => setModalAberto(false)}
      />
    </div>
  );
}

export default App;
