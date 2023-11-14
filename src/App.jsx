import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [treinos, setTreinos] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/treinos");
      setTreinos(response.data);
    } catch (error) {
      console.error('Erro ao buscar treinos:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="card-container">
        {treinos.map((treinoNow) => (
          <div className="card" key={treinoNow.id}>
            <h2 className="card-title">{treinoNow.grupoMuscular}</h2>
            {treinoNow.exercicios.map((exercicio, index) => (
              <ul key={index}>
                <li key={index}>
                  <strong>{exercicio.nome}</strong> :
                  <ul>
                    <li>Repetições: {exercicio.repeticoes}</li>
                    <li>Séries: {exercicio.series}</li>
                    <li>Tempo Máximo: {exercicio.tempoMaximo}</li>
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
