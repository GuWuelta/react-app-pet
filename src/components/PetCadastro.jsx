import React, { useState } from 'react'
import { DivLista } from '../style/styled'
import Cadastro from './Cadastro'
import FormCadastros from './FormCadastros'

export default function ListaTarefas() {
  
    const[cadastro, setCadastro] = useState([
      {
      nome : "Lola",
      idade : "12 anos",
      raca : "Yorkshire",
      tamanho : "60cm",
      nomeDono : "Gustavo",
      telDono : "11 94180-9501",
      observacoes : "Tomar cuidado pois a pata direita da frente está machucada"
      }    
    ])
  
    //ADD TAREFA
    const addCadastro = (e)=>{
      e.preventDefault()
  
      //Adicionando uma nova tarefa
      setNCadastro({nome:"",idade:"",raca:"",tamanho:"",nomeDono:"",telDono:"",observacoes:""})
      setCadastro([...cadastro, nCadastro])
    }
    
    // Criando state de nova tarefa
    const [nCadastro, setNCadastro] = useState({nome:"",idade:"",raca:"",tamanho:"",nomeDono:"",telDono:"",observacoes:""})
  
    //FUNÇÃO DE CAPTURA DOS DADOS FORM
    const captura = (e)=>{
        const {value,name} = e.target
  
        if(name === "nome"){
        setNCadastro({nome: value,idade: nCadastro.idade,raca: nCadastro.raca,tamanho: nCadastro.tamanho, nomeDono: nCadastro.nomeDono, telDono: nCadastro.telDono,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "idade"){
        setNCadastro({nome: nCadastro.nome,idade: value,raca: nCadastro.raca,tamanho: nCadastro.tamanho, nomeDono: nCadastro.nomeDono, telDono: nCadastro.telDono,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "raca"){
        setNCadastro({nome: nCadastro.nome,idade: nCadastro.idade,raca: value,tamanho: nCadastro.tamanho, nomeDono: nCadastro.nomeDono, telDono: nCadastro.telDono,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "tamanho"){
        setNCadastro({nome: nCadastro.nome,idade: nCadastro.idade,raca: nCadastro.raca,tamanho: value, nomeDono: nCadastro.nomeDono, telDono: nCadastro.telDono,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "nomeDono"){
        setNCadastro({nome: nCadastro.nome,idade: nCadastro.idade,raca: nCadastro.raca,tamanho: nCadastro.tamanho, nomeDono: value, telDono: nCadastro.telDono,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "telDono"){
        setNCadastro({nome: nCadastro.nome,idade: nCadastro.idade,raca: nCadastro.raca,tamanho: nCadastro.tamanho, nomeDono: nCadastro.nomeDono, telDono: value,observacoes: nCadastro.observacoes})
        } 
        
        else if(name === "observacoes"){
        setNCadastro({nome: nCadastro.nome,idade: nCadastro.idade,raca: nCadastro.raca,tamanho: nCadastro.tamanho, nomeDono: nCadastro.nomeDono, telDono: nCadastro.telDono,observacoes: value})
        }

      }
  
    return (
      <DivLista>
        
        <FormCadastros
          funcaoAddCadastro={addCadastro}
          novoCadastro={nCadastro}
          oQueFoiDigitado={captura}      
        />
  
        {cadastro.map((tar,i)=>
          <Cadastro
          key={i}
          tituloProps={tar.titulo}
          setorProps={tar.setor}
          descricaoProps={tar.descricao}
          />
        )}    
      </DivLista>
      
    )
  }
  