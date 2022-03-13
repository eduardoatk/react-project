import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vh;
`

export const Contend = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color:#333;
    margin-top: 5rem;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    // Aqui ele utilizou sass ao invés de :hover
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const Button = styled.button`
    height: 2.1rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.8rem;
    color: red;
    font-weight: bold;
    margin-top: 1rem;
`