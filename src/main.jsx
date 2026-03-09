import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import App from "./App";
import Componentes from "./components/Componentes";
import Header from "./components/Header";

import fundo from "./assets/fundo.jpg";
import fundoDark from "./assets/fundo-dark.jpg";
import Calendario from "./components/Calendario";


function Root() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={`app ${temaEscuro ? "escuro" : "claro"}`}
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${temaEscuro ? fundoDark : fundo})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          paddingTop: "30px",
        }}
      >
        <Header temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />

        <Routes>
          <Route path="/" element={<App temaEscuro={temaEscuro} />} />
          <Route path="/calendario" element={<Calendario temaEscuro={temaEscuro} />} />
         
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
