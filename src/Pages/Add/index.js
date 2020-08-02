import React from 'react'
import { Link } from 'react-router-dom'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import { Area } from './styled'

export default (props) => {
    return (
        <Area>
            <div className="area-left">
                <AttachFileIcon  />
                <h3>Adicionar contestação</h3>
            </div>
            <form>
                <div className="div-input">
                    <label>Numero da ocorrencia</label>
                    <input type="text" />
                </div>
                <div className="div-input">
                    <label>Numero do CPF</label>
                    <input type="number" />
                </div>
                <div className="div-input">
                    <label>Terminal</label>
                    <input type="number" />
                </div>
                <div className="div-input">
                    <label>Valor</label>
                    <input type="number" />
                </div>
                <div className="div-input">
                    <label>Status</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div className="div-input">
                    <label>Data</label>
                    <input type="date" />
                </div>
                <div className="div-input">
                    <button  className="div-button-add">
                        <SaveAltIcon />
                        Adicionar
                    </button>
                    <Link className="div-button-exit" to="/" >
                        <KeyboardReturnIcon />
                        Voltar
                    </Link>
                </div>
            </form>
        </Area>
    )
}