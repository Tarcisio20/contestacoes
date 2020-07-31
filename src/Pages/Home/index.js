import React from 'react'
import ImageATM from './../../Images/atm.png'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Area } from './styled'

export default (props) => {
    return (
        <Area>
            <div className="area-left">
                <div className="area-img">
                    <img src={ImageATM} alt="" />
                </div>
                <ul className="menu">
                    <li>
                        <AccountBalanceWalletIcon color="primary" />
                        <label>Contestações</label>
                    </li>
                    <li>
                        <ExitToAppIcon color="secondary" />
                        <label>Sair</label>
                    </li>
                </ul>
            </div>
            <div className="area-right">
                Area de informações
            </div>
        </Area>
    )
}