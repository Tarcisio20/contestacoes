import React, { useState } from 'react'
import { BoxMessageError } from './../../Components/mainComponents'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ErrorIcon from '@material-ui/icons/Error';
import { doLogin } from './../../Helpers/AuthHandler'
import useApi from './../../Helpers/API'
import { Area } from './styled'

export default props => {
    const api = useApi()
    //States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassowrd, setRememberPassword] = useState(false)
    const [disabled, setDisabled] =useState(false)
    const [error, setError] = useState('')

    // FUNCTIONS
    const handlerSubmit = async e => {
        e.preventDefault()
        setDisabled(true)

        const json = await api.login(email, password)

        if(json.error) {
            setError(json.error)
        }else {
            doLogin(json.token, rememberPassowrd)
            window.location.href = '/'
        }



    }

    return (
        <Area>
           {error && <BoxMessageError>{error} <ErrorIcon /></BoxMessageError>
            }
            <form onSubmit={handlerSubmit}>
                <div className="div-form-input">
                    <label>Login:</label>
                    <input type="email"
                    required
                    disabled={disabled}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="div-form-input">
                    <label>Senha:</label>
                    <input type="password"
                    required
                    disabled={disabled}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className="div-form-input div-diferent">
                    <input type="checkbox"
                    disabled={disabled}
                    checked={rememberPassowrd}
                    onChange={()=>setRememberPassword(!rememberPassowrd)}
                    />
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