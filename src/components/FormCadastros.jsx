import React from 'react';

export default function FormCadastros(props) {
  return(
    <div>
        <form method='post' onSubmit={props.funcaoAddCadastro}>
            <div>
                <label>Nome do pet</label>
                <input type="text" name='nomePet' placeholder='Nome do pet...' value={props.novoCadastro.nomePet} onChange={props.oQueFoiDigitado} />
            </div>
            <div>
                <label>Idade do pet</label>
                <input type="text" name='idadePet' placeholder='Idade do pet...' value={props.novoCadastro.idade} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Raça</label>
                <input type="text" name='racaPet' placeholder='Raça do pet...' value={props.novoCadastro.raca} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Tamanho</label>
                <input type="text" name='tamanho' placeholder='Tamanho do pet...' value={props.novoCadastro.tamanho} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Nome do dono</label>
                <input type="text" name='nomeDono' placeholder='Nome do dono...' value={props.novoCadastro.nomeDono} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Telefone do dono</label>
                <input type="text" name='telDono' placeholder='Telefone do dono...' value={props.novoCadastro.telDono} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Observações</label>
                <textarea name="observacoes" cols="30" rows="10" placeholder='Observações...' value={props.novoCadastro.observacoes} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <button type='submit'>Adicionar</button>
            </div>
        </form>
    </div>
  )
}