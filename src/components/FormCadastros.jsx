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
                <textarea name="raca" cols="30" rows="10" placeholder='Raça do pet...' value={props.novoCadastro.raca} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <label>Tamanho</label>
                <textarea name="tamanho" cols="30" rows="10" placeholder='Tamanho do pet...' value={props.novoCadastro.tamanho} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <label>Nome do dono</label>
                <textarea name="nomeDono" cols="30" rows="10" placeholder='Nome do dono...' value={props.novoCadastro.nomeDono} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <label>Telefone do dono</label>
                <textarea name="telDono" cols="30" rows="10" placeholder='Telefone do dono...' value={props.novoCadastro.telDono} onChange={props.oQueFoiDigitado}></textarea>
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