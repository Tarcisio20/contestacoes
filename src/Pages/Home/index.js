import React from 'react'
import { Link } from 'react-router-dom'
import ImageATM from './../../Images/atm.png'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Area } from './styled'

export default (props) => {
    return (
        <Area>
            <div className="area-left">
                <div className="area-img">
                    <img src={ImageATM} alt="" />
                </div>
                <ul className="menu">
                    <li className="active">
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
                <h3>Area de informações</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th >ID</th>
                        <th >Nome</th>
                        <th >CPF</th>
                        <th >Valor</th>
                        <th> Status</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tarcisio Silva</td>
                        <td>000.000.000-00</td>
                        <td>R$ 1.200,00</td>
                        <td>Concluido</td>
                        <td>
                            <Link className="edit" to=""><EditIcon  fontSize="small" /></Link>
                            <Link className="delete" to=""><DeleteIcon  fontSize="small" /></Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarcisio Silva</td>
                        <td>000.000.000-00</td>
                        <td>R$ 1.200,00</td>
                        <td>Em andamento.</td>
                        <td>
                            <Link className="edit" to=""><EditIcon  fontSize="small" /></Link>
                            <Link className="delete" to=""><DeleteIcon  fontSize="small" /></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Area>
    )
}