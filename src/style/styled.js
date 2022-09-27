import styled from 'styled-components'

//CRIANDO MÓDULO STYLED

export const DivLista = styled.div`
    width: 100%;
    padding: 20px;
    min-height: 85vh;
    background-color: #00FA9A;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

export const DivTarefa = styled.div`
    background-color: #A020F0;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 250px;
    margin: 10px;
    h2,p{ padding-bottom: 10px; }
`