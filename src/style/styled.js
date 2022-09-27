import styled from 'styled-components'

//CRIANDO MÓDULO STYLED

export const DivLista = styled.div`
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    background-color: #A020F0;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
    color: #FFFF00;
    font-size: 18px;
    padding-bottom: px;
    input{margin: 10px}
    textarea{margin:10px}
    label{margin: 15px}
`

export const DivTarefa = styled.div`
    background-color: #00FA9A;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 250px;
    margin: 10px;
    p{ padding-bottom: 10px; }
    color: #006400;
    font-size: 18px;
    font-weight: bolder;
`