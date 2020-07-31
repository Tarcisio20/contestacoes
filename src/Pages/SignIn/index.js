import React from 'react'
import { BoxMessageError } from './../../Components/mainComponents'

import { Area } from './styled'

export default props => {
    return (
        <Area>
            <BoxMessageError>Mensagem de erro</BoxMessageError>
            <form>
                <div className="div-form-input">
                    <label>Login:</label>
                    <input type="email" />
                </div>
                <div className="div-form-input">
                    <label>Senha:</label>
                    <input type="password" />
                </div>
                <div className="div-form-input">
                    <input type="submit" className="form-button" />
                </div>
            </form>
        </Area>
    )
}