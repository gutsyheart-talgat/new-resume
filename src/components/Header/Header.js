import React from "react";
import style from './header.module.css'
import img from '../../img/photo.jpg'
export default function Header (){
    return (
        <div className={style.header}>
            <div className={style.pic}></div>
            <img className={style.img} src={img}/>
            <div className={style.about}>
                Talgat Dzhailikeev
            </div>
        </div>
    )
}