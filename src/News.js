import React from 'react';

import './stylesheets/news.css';

function News(){
    return(
        <div className="news">
            <div className="header">
                <h1>Notícias</h1>
            </div>

            <h2>Torneios</h2>

            <p className="alert">Faltam poucas semanas pro campeonato mundial de 2021</p>
            
            <div className="box">
                <h2>Campeonato dos EUA</h2>
                <p>Pela terceira vez em sua carreira, <b>Wesley So</b> vence o terceiro campeonato dos Estados Unidos, derrubando
                    gigantes no xadrez como <b>Fabiano Caruana</b> e <b>Hikaru Nakamura</b>. O jogador tem tido um crescimento notório e é
                    considerado por muitos um potencial adversário do campeão <b>Magnus Carlsen</b> no campeonato mundial de 2022. Wesley
                    teve de enfrentar Caruana e o GM <b>Sam Servian</b> nos <i>tie-breaks</i>, conseguindo encontrar uma vitória depois de um
                    vacilo de Caruana no fim de jogo. Sua habilidade com partidas mais rápidas é unanimamente reconhecida, e foi o que lhe trouxe o título.
                </p>
                <p> Wesley So confessa que sua habilidade dependia um pouco da sorte no último dia, e também
                    reconhece a habilidade extraordinária do desafiante ao título do mundial de 2018: <i>"Eu achei que o torneio tinha acabado
                        ontem, Fabiano ganhou quase três jogos em sequência. Me foi dado um novo sopro de 
                    vida que o torneio não tivesse acabado ainda, que eu ainda tinha chances. Eu só queria jogar rápido 
                    hoje e fazer uns bons lances. Fabi joga pra vencer com brancas ou negras, e logo eu me encontrei em uma
                    posição muito difícil. Ele provavelmente perdeu algum lance vitorioso no fim do jogo em algum momento.
                    Eu estava jogando sem pressão: Eu não esperava chegar nos playoffs, então eu só estava jogando xadrez:
                     Se chances vêm, ótimo. Se eu perder, tá tudo bem."</i>
                </p>
            </div>

            <div className="box">
                <h2>Campeonato mundial</h2>
                <p> <b>Magnus Carlsen</b> defenderá seu título no final de 2021 contra o desafiante <b>Ian Nepomniachtchi</b>,
                    ganhador do Torneio de Candidatos e detentor de um estilo de jogo agressivo e atacante. 
                    O campeão se mantém na posição desde 2013, e é o favorito na disputa contra o russo 
                    pela sua constância como jogador e capacidade de adaptação. O torneio terá início no dia 24 de novembro de 2021, 
                    em Dubai, presencialmente. As medidas preventivas da pandemia serão seguidas, com testes contra COVID em ambos os jogadores, já devidamente vacinados.
                </p>

                <p>O favorito do torneio de candidatos <b>Fabiano Caruana</b>, desafiante de 2018 contra Carlsen, se saiu
                    mal depois da volta do torneio após os ajustes de quarentena do COVID-19, quebrando
                    as expectativas dos espectadores. <b>Ding Liren</b>, a promessa do xadrez da China, obteve um início favorecido
                    mas teve um nível aquém do esperado na segunda parte do torneio, ficando para trás na classificação.
                </p>
            </div>
            
            <div className="box">
                <h2>Norway Chess</h2>
                <p>O torneio se encerrou dia 18 de setembro de 2021. O favorito e campeão mundial <b>Magnus Carlsen</b> conseguiu
                    obter a vitória sobre jogadores formidáveis como <b>Aryan Tari</b>, <b>Alireza Firouja</b> e <b>Ian Nepomniachtchi</b>. Apesar
                    de ter conseguido a maior quantidade total de pontos, Firouja conseguiu uma pontuação superior a Carlsen na 
                    categoria das partidas pensadas. Nepomniachtchi obteve uma pontuação superior no Armageddon, mas
                    se saiu mal nas partidas pensadas.</p>
                <p> Magnus comenta: <i>"Nesse ano foi difícil e francamente, no meio do caminho, 
                    não parecia que ia acontecer, não mesmo. Foi uma vitória realmente satisfatória."</i>
                </p>
            </div>

        </div>
    );
}

export default News;