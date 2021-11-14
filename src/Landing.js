import React from 'react';

import './stylesheets/style.css';
import './stylesheets/landing.css';
import landing from './images/landingimg.png';
import chessback from './images/chessback.png';

function Landing(){
    return(
        <div className="landing">
            <div className="header">
                <h1><b>U</b>niverso <b>64</b></h1>
            </div>

            <div className="herocontent">

                <img className="landingimg" src={landing} alt="Quem é o rei?" />

                <div className="texthero">
                    <h2>Torne-se o rei do maior jogo de tabuleiro do mundo.</h2>
                
                    <div className="aboutbuttondiv">          
                        <a className="aboutbutton" href="/about">Saiba mais</a>     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;