import React from 'react'
import ImageATM from './../../Images/atm.png'
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
                        <img src="" alt=""/>
                        <label>Contestações</label>
                    </li>
                    <li>
                        <img src="" alt=""/>
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