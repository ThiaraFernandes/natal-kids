import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChildNameContext } from "../Home/Contexts/ChildNameContext";

export default function Login({ setIsLoggedIn }) {
  const [nome, setNome] = useState("");
  const { setChildName } = useContext(ChildNameContext);

  const handleSubmit = () => {
    if (nome.trim()) {
      setChildName(nome);
      setIsLoggedIn(true);
    } else {
      alert("Por favor, insira um nome!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "linear-gradient(135deg, #4CAF50, #FF6347)" }}>
      <div className="card p-4 shadow-lg" style={{ width: "26rem" }}>
        <h1 className="text-center text-secondary mb-4">
          Digite seu nome e prepare-se para uma aventura cheia de magia e diversão!
        </h1>
        <form
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        >
          <div className="mb-3">
            <label htmlFor="nome" className="form-label fw-bold fs-2">Nome:</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome aqui"
              value={nome}
              style={{ fontSize: "1.5rem" }}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z]*$/.test(value)) {
                  setNome(value);
                }
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-success w-100 fs-4"
            onClick={handleSubmit}
          >
            Estou pronto!
          </button>
        </form>
      </div>
    </div>
  );
}
