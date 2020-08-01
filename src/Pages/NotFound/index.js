import React from 'react'
import { Link } from 'react-router-dom'
import img404 from './../../Images/seo-e-web.png'

import { Area } from './styled'

export default () => {
    return(
        <Area>
            <div className="div-box">
                <img src={img404} alt="" />
                <div className="div-box-text">
                    <p>Desculpe</p>
                    <p>Página não econtrada</p>
                    <Link to="/" >Voltar para a página inicial!</Link>
                </div>
            </div>
        </Area>
    )
}