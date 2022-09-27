import React from 'react'
import { DivTarefa } from '../style/styled'

export default function Cadastro(props) {
  return (
    <DivTarefa>
        <p>{props.nomePetProps}</p>
        <p>{props.idadeProps}</p>
        <p>{props.racaProps}</p>
        <p>{props.tamanhoProps}</p>
        <p>{props.nomeDonoProps}</p>
        <p>{props.telDonoProps}</p>
        <p>{props.observacoesProps}</p>
    </DivTarefa>
  )
}