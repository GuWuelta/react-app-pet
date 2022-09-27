import React from 'react';

export default function FormCadastros(props) {
  return(
    <div>
        <form method='post' onSubmit={props.funcaoAddCadastro}>
            <div>
                <label>Nome do pet</label>
                <input className='inputNome' type="text" name='nome' placeholder='Nome do pet...' value={props.novoCadastro.nome} onChange={props.oQueFoiDigitado} />
            </div>
            <div>
                <label>Idade do pet</label>
                <input className='inputIdade' type="text" name='idade' placeholder='Idade do pet...' value={props.novoCadastro.idade} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Raça do pet</label>
                <input className='inputRaca' type="text" name='raca' placeholder='Raça do pet...' value={props.novoCadastro.raca} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Tamanho do pet</label>
                <input className='inputTamanho' type="text" name='tamanho' placeholder='Tamanho do pet...' value={props.novoCadastro.tamanho} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Nome do dono</label>
                <input className='inputNomeDono' type="text" name='nomeDono' placeholder='Nome do dono...' value={props.novoCadastro.nomeDono} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Telefone do dono</label>
                <input className='inputTel' type="text" name='telDono' placeholder='Telefone do dono...' value={props.novoCadastro.telDono} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Observações</label>
                <textarea name="observacoes" cols="50" rows="7" placeholder='Observações...' value={props.novoCadastro.observacoes} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <button type='submit'>Cadastrar</button>
            </div>
        </form>
    </div>
  )
}