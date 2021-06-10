import React from 'react';
import "./styles.css";
import User from '../../assets/user.png'
export default function CardBlog({img, title, altbox, ft, nameuser, color }){
    return(
        <>
            <img src={img} alt={altbox}/>
            <div className="conteudo">
                <h1>{title}</h1>
                <div className="creator">
                    <div className='user' style={{backgroundColor: color}}>
                        <img src={ft}/>
                    </div>
                    <p>{nameuser}</p>
                </div>
            </div>
        </>
    )
}