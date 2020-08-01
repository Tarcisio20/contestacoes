import React from 'react'
import { BoxMessageError } from './../../Components/mainComponents'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ErrorIcon from '@material-ui/icons/Error';

import { Area } from './styled'

export default props => {
    return (
        <Area>
            <BoxMessageError>Mensagem de erro <ErrorIcon /></BoxMessageError>
            <form>
                <div className="div-form-input">
                    <label>Login:</label>
                    <input type="email" />
                </div>
                <div className="div-form-input">
                    <label>Senha:</label>
                    <input type="password" />
                </div>
                <div className="div-form-input div-diferent">
                    <input type="checkbox" />
                    <label className="text-diferent">Lembrar minha senha.</label>
                </div>
                <div className="div-form-input">
                    <button type="submit" className="form-button">
                        <ExitToAppIcon />
                        Logar
                    </button>
                </div>
            </form>
        </Area>
    )
}