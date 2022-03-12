import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled_home'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const history = useNavigate()
  const [usuario, setUsuario] = useState("")

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories')
    })
  }

  return (
    <>
      <S.Title>Consulta Repositórios Github: </S.Title>

      <S.Container>
        <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
    </>
  )
}