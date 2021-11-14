
import bispo from './images/bispo.jpg';
import torre from './images/torre.jpg';
import cavalo from './images/cavalo.jpg';
import peao from './images/peão.jpg';
import dama from './images/queen.jpg';
import rei from './images/king.jpg';
import meme1 from './images/meme/meme1.png';
import meme2 from './images/meme/meme2.png';
import meme3 from './images/meme/meme3.png';
import meme4 from './images/meme/meme4.png';

import './stylesheets/content.css';
import './stylesheets/style.css';

function Content(){
    return(
        <div className="content">

            <div className="header">
                <h1>Conteúdo</h1>
            </div>

            <div className="presentation">
                <p>Aproveite todo tipo de material provido pelo nosso site!</p>
            </div>

            <div className="box">
                <h2>O que está procurando?</h2>
                <div className="guide">
                    <ul>
                        <li>
                            <a href="#image">Imagens</a>
                        </li>
                        <li>
                            <a href="#video">Vídeos</a>
                        </li>
                        <li>
                            <a href="#meme">Memes</a>
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Links para sites de xadrez online</h2> 
            <div className="links">
                <a href="https://www.chess.com/home">Chess.com</a>
                <p>Um site completo com todo tipo de conteúdo e conta com a presença
                    dos profissionais!
                </p>
                <br/><br/>
                <a href="https://lichess.org/">Lichess</a><br/>
                <p>Design simplista para aqueles que desejam apenas o desafio do tabuleiro</p>
                <br/><br/>
            </div>
            <h2 id="image">Imagens</h2> 
            <h4>Abaixo, seguem imagens de peças de xadrez e suas aparências em jogo.</h4>
            <div className = "img">
                <img className = "peca" src={rei} alt="Rei"  border="15" /> 
                <img className = "peca" src={dama} alt="Rainha" border="15" /> 
                <img className = "peca" src={torre} alt="Torre" border="15" />
                <img className = "peca" src={bispo}alt="Bispo" border="15" /> 
                <img className = "peca" src={cavalo} alt="Cavalo" border="15" /> 
                <img className = "peca" src={peao} alt="Peão" border="15" />
            </div>

            <h2 id="video">Vídeos</h2>

            <div className="box">

                <h3>Hikaru Nakamura vs Garry Kasparov (2017)</h3>
                
                <p>O lendário e aposentado Garry Kasparov ainda se mantém ativo nas partidas blitz em torneios oficias e teve de se 
                    salvar do lorde das partidas mais rápidas de xadrez, Hikaru Nakamura, que faz streams na internet constantes jogando 
                    partidas nessas velocidades.
                </p>

                <h2>
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/ArHtFdOOp-A">
                </iframe></h2>
            </div>
            <div className="box">

                <h3>Magnus Carlsen se tornando o Campeão Mundial de Partidas Rápidas (2019)</h3>

                <p>O jogador Magnus Carlsen é o campeão mundial de xadrez desde 2013 nas partidas pensadas. Além disso, 
                ele também conseguiu realizar proezas em outros tipos de campeonato, como partidas rápidas, blitz e bullet, que 
                variam em relação ao tempo que cada jogador dispõe durante o jogo.
                </p>

                <h2>
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/6O3WEOIm4m8">
                </iframe>
                </h2>
            </div>
            <div className="box">
                <h3>Magnus Carlsen vs Supi (amistoso)</h3>
                
                <p>O Grande Mestre brasileiro Luis Paulo Supi confrontou o campeão mundial em uma partida blitz
                    online na plataforma chess24 e realizou uma perfomance de cair o queixo de qualquer um, inclusive do seu oponente.
                </p>

                <h2>
                <iframe width="420" height="315"
                src="https://youtube.com/embed/2uJrV1OSLG8">
                </iframe>
                </h2>
            </div>

            <h2 id="meme">Memes</h2>
            <div className="meme">

                    <img className = "memeimg" src={meme1} alt="Rei"  border="15" /> 

                    <img className = "memeimg" src={meme2} alt="Rei"  border="15" /> 
 
                    <img className = "memeimg" src={meme3} alt="Rei"  border="15" /> 

                    <img className = "memeimg" src={meme4} alt="Rei"  border="15" /> 

            </div>
        </div>
    );
}

export default Content;