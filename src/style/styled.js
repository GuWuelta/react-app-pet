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
    input{margin-left: 20px; margin-top: 10px}
    
    .inputNome{margin-left:38px}
    .inputIdade{margin-left:42px}
    .inputRaca{margin-left: 45px}
    .inputTamanho{margin-left: 13px}
    .inputNomeDono{margin-left: 24px}
    .inputTel{margin-left: 4px}

    textarea{margin-left:35px; margin-top: 10px}
    label{margin: 10px}
    button{padding:5px; margin-left:10px; margin-top: 20px; border: solid 2px #696969;}
    button:hover{background-color: #FFFF00; color:#A020F0; font-size:15px}
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