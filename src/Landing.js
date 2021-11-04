import React from 'react';

import './stylesheets/style.css';
import './stylesheets/landing.css';
import landing from './images/landingimg.png';

function Landing(){
    return(
        <div class="landing">
            <div class="header">
                <h1><b>U</b>niverso <b>64</b></h1>
            </div>

            <div class="herocontent">

                <img class="landingimg" src={landing} alt="" />

                <div class="texthero">
                    <h2>Torne-se o rei do maior jogo de tabuleiro do mundo.</h2>
                
                    <div class="aboutbuttondiv">          
                        <a class="aboutbutton" href="/about">Saiba mais</a>     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;