import React, { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [usuario, setUsuario] = useState("")

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }

  return (
    <>
      <h2>Consulta Repositórios Github</h2>
      <input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}