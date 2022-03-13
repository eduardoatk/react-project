import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled_home'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("")
  const [ erro, setErro ] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data
      const repositoriesName = [];
      repositories.forEach((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      navigate('/repositories')
    }).catch(err => {
      setErro(true)
    })
  }

  return (
    <>
      <S.Title>Consulta Repositórios Github: </S.Title>
      <S.HomeContainer>
        <S.Contend>
          <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Contend>
        { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
      </S.HomeContainer>
    </>
  )
}