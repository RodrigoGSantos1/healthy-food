import React from 'react'
import './styles.css'
import ImgFinal from '../../assets/bloco_final_image.svg'

export default function Inscrevase(){
    return(
        <div className="inscrevase">
            <div className="conteudo-final">
                <h1>Join our membership<br/>to get special offer</h1>
            </div>
            <div className="image">
                <img src={ImgFinal} alt="bloco_final_image"/>
            </div>
        </div>
    )
}