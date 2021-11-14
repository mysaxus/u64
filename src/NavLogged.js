import React from 'react';

import './stylesheets/style.css';
import './stylesheets/nav.css';

function NavLogged(){


    return(

        <header>
            <nav>
                <b>U64</b>
                <ul className="nav"> 
                    <li><a href="/">Página inicial</a></li>
                    <li><a href="/tutoriallanding">Tutorial</a></li>
                    <li><a href="/content">Conteúdos</a></li>
                    <li><a href="/news">Noticias</a></li>
                    <li><a href="/about">Sobre nós</a></li>
                </ul>
                <ul className="nav">
                    <li><a className="button" href="/account">Meu perfil</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavLogged;