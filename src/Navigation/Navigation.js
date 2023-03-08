import React, { Component, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import style from './Navigation.module.css';
export default function Navigation() {
    const{dark, theme , toggle} = useContext(ThemeContext);
    return (
        <div className={style.container}>
            <nav style={{backgroundColor: theme.backgroundColor, color:theme.color}}>
                <ul>
                    <li>
                        <a className='active' href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#news'>News</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <div className={style.switchMode}>
                    <a  href="#" onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color:theme.color,
                        outline: 'none'
                    }} data-testid = "toggle-theme-btn"
                    >
                        Switch Nav to {!dark? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>
    )


}