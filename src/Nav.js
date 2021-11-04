import React from 'react';

import './stylesheets/style.css';
import './stylesheets/nav.css';

function Nav(){
    return(

        <header>
            <nav>
                <b>U64</b>
                <ul class="nav"> 
                    <li><a href="/">Página inicial</a></li>
                    <li><a href="/tutoriallanding">Tutorial</a></li>
                    <li><a href="/content">Conteúdos</a></li>
                    <li><a href="/news">Noticias</a></li>
                    <li><a href="/trivia">Trivia</a></li>
                    <li><a href="/about">Sobre nós</a></li>
                </ul>
                <ul class="nav">
                    <li><a class="button" href="/login">Faça login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;