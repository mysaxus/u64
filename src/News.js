import React from 'react';

import './stylesheets/news.css';

function News(){
    return(
        <div class="news">
            <div class="header">
                <h1>Notícias</h1>
            </div>

            <h2>Torneios</h2>

            <p class="alert">Faltam poucos meses pro campeonato mundial de 2021</p>
            
            <div class="box">
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
            
            <div class="box">
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