import React, { Component } from 'react'
import style from './Players.module.css';
import { Players } from '../shared/ListOfPlayers';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Player() {
    const [player, setPlayer] = useState([]);
    return (
        <div className={style.container}>
            {Players.map((data) => (
                <div className={style.column} key={data.id}>
                    <div className={style.card}>
                        <img src={data.img}></img>
                        <h3>{data.name}</h3>
                        <p className='title'>{data.club}</p>
                        <Link to={`detail/${data.id}`}>
                            <p><button>Detail</button></p>
                        </Link>




                    </div>
                </div>
            ))}

            <div id='popup1' className={style.overlay}>
                <div className={style.popup}>
                    <img src={player.img}></img>
                    <h2>{player.name}</h2>
                    <a className={style.close} href='#'>&times;</a>
                    <div className={style.content}>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )

}