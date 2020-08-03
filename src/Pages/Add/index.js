import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BoxMessageError } from './../../Components/mainComponents'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import useApi from './../../Helpers/API'

import { Area } from './styled'

export default (props) => {
    const api = useApi()
    //STATES
    const [numContest, setNumContest] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [terminal, setTerminal] = useState('')
    const [valor, setValor] = useState('')
    const [status, setStatus] = useState('')
    const [data, setData] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    // FUNCTIONS
    const handlerSubmit = async e =>  {
        e.preventDefault()
        setDisabled(true)

        const json = await api.insert(numContest, name, cpf, terminal, valor, status, data)

        if(json.error) {
            setDisabled(false)
            setError(json.error)
        }else {
           // doLogin(json.token, rememberPassowrd)
           setDisabled(false)
            window.location.href = '/'
        }
    }

    return (
        <Area>
            {error && 
                <BoxMessageError>{error}</BoxMessageError>
            }
            <div className="area-left">
                <AttachFileIcon  />
                <h3>Adicionar contestação</h3>
            </div>
            <form onSubmit={handlerSubmit}>
                <div className="div-input">
                    <label>Numero da ocorrencia</label>
                    <input type="text" disabled={disabled} value={numContest} required onChange={e=>setNumContest(e.target.value)} />
                </div>
                <div className="div-input">
                    <label>Nome:</label>
                    <input type="text" disabled={disabled} valeu={name} required onChange={e=>setName(e.target.value)} />
                </div>
                <div className="div-input">
                    <label>Numero do CPF</label>
                    <input type="number" disabled={disabled} value={cpf} required onChange={e=>setCpf(e.target.value)} />
                </div>
                <div className="div-input">
                    <label>Terminal</label>
                    <input type="number" disabled={disabled} value={terminal} required onChange={e=>setTerminal(e.target.value)} />
                </div>
                <div className="div-input">
                    <label>Valor</label>
                    <input type="number" disabled={disabled} value={valor} required onChange={e=>setValor(e.target.value)} />
                </div>
                <div className="div-input">
                    <label>Status</label>
                    <select value={status} disabled={disabled} required onChange={e=>setStatus(e.target.value)} >
                        <option></option>
                        <option value="1">Em analise</option>
                        <option value="2">Concluido</option>
                    </select>
                </div>
                <div className="div-input">
                    <label>Data</label>
                    <input type="date" value={data} required onChange={e=>setData(e.target.value)} disabled={disabled} />
                </div>
                <div className="div-input">
                    <button  className="div-button-add" disabled={disabled} >
                        <SaveAltIcon />
                        Adicionar
                    </button>
                    <Link className="div-button-exit" to="/" disabled={disabled} >
                        <KeyboardReturnIcon />
                        Voltar
                    </Link>
                </div>
            </form>
        </Area>
    )
}