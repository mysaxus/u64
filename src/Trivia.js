import React from 'react';

import './stylesheets/trivia.css';

function Trivia(){
    return(
        <div class="trivia">
            <div class="header">
                <h1>Trivia</h1>
            </div>
            
            <div class="box">
                <h3>História</h3>
                <p>Xadrez é um jogo persa de vários séculos de idade. Uma das expressões
                mais utilizadas, como xeque-mate, vem do persa "sheq mat", que significa "o rei está morto".</p> 
                <br/>
                <p title="Informações adicionais sobre o texto"> Atualmente, xadrez é um esporte
                respeitado e tem grande fama entre os jogos de tabuleiro. Tem um nível alto de estratégia
                envolvido e se faz necessário o uso de computadores para se aprimorar no patamar competitivo.
                </p><br/>
            </div>
            
            <h2>Tabelas</h2>
            <h3> Melhores ratings de xadrez </h3>
            <table>
                <tr> 
                    <th>Nome</th> 
                    <th>País</th>
                    <th>Idade</th>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>Magnus Carlsen</td>
                    <td>Noruega</td>
                    <td>30</td>
                    <td>2855</td>
                </tr>
                <tr>
                    <td>Fabiano Caruana</td>
                    <td>Estados Unidos</td>
                    <td>29</td>
                    <td>2800</td>
                </tr>
                <tr>
                    <td>Ding Liren</td>
                    <td>China</td>
                    <td>28</td>
                    <td>2799</td>
                </tr>
                <tr>
                    <td>Ian Nepomniachtchi</td>
                    <td>Rússia</td>
                    <td>31</td>
                    <td>2782</td>
                </tr>
                <tr>
                    <td>Levon Aronian</td>
                    <td>Armênia</td>
                    <td>39</td>
                    <td>2782</td>
                </tr>
                <tr>
                    <td>Wesley So</td>
                    <td>Estados Unidos</td>
                    <td>28</td>
                    <td>2778</td>
                </tr>
                <tr>
                    <td>Anish Giri</td>
                    <td>Holanda</td>
                    <td>27</td>
                    <td>2774</td>
                </tr>
                <tr>
                    <td>Alexander Grischuk</td>
                    <td>Rússia</td>
                    <td>37</td>
                    <td>2773</td>
                </tr>
                <tr>
                    <td>Alireza Firouzja</td>
                    <td>Rússia</td>
                    <td>31</td>
                    <td>2792</td>
                </tr>
                <tr>
                    <td>Richard Rapport</td>
                    <td>Hungria</td>
                    <td>25</td>
                    <td>2770</td>
                </tr>
            </table>
            
                    
            <h2>Trivia de jogadores</h2>  
            <h3>Maiores ex-campeões mundiais</h3>  
            <ul>
                <li>Emanuel Lasker - PRU (1894 - 1920) - 26 anos</li><br/>
                <li>Garry Kasparov - URSS (1985 - 2000) - 15 anos</li><br/>
                <li>Anatoly Karpov - RUS (1975 - 1984) - 9 anos</li><br/>
                <li>Mikhail Botvinnik - URSS (1948 - 1956) - 8 anos</li><br/>
                <li>Alexander Alekhine - FRA (1927 - 1934) - 7 anos</li><br/>
                <li>Wilhelm Steinitz - AUS (1886 - 1893) - 7 anos</li><br/>
                <li>Bobby Fischer - EUA (1972 - 1974) - 2 anos</li><br/>
            </ul>
            
            <h3>Menções honrosas</h3>
            <ul>
                <li>Paul Morphy - EUA (1858 ~ 1859)</li><br/>
                <li>Adolf Anderssen - PRU (1859 ~ 1870)</li><br/>
                <li>José Raúl Capablanca - CUB (1921 - 1926)</li><br/>
                <li>Viswanathan Anand - IND (2007 - 2013)</li><br/>
                <li>Bobby Fischer - EUA (1972 - 1974)</li><br/>
            </ul>
            
            <h3>Melhores jogadores de Xadrez Clássico</h3>
            <ol>
                <li>Magnus Carlsen</li><br/>
                <li>Fabiano Caruana</li><br/>
                <li>Ding Liren</li><br/>
                <li>Ian Nepomniachtchi</li><br/>
                <li>Levon Aronian</li><br/>
                <li>Wesley So</li><br/>
                <li>Anish Giri</li><br/>
                <li>Alexander Grischuk</li><br/>
                <li>Maxime Vachier-Lagrave</li><br/>
                <li>Teimour Radjabov</li><br/>
            </ol>
            
            <h3>Melhores jogadores de Xadrez Rápido</h3>
            <ol>
                <li>Magnus Carlsen</li><br/>
                <li>Hikaru Nakamura</li><br/>
                <li>Ding Liren</li><br/>
                <li>Jan-Krzysztof Duda</li><br/>
                <li>Ian Nepomniachtchi</li><br/>
                <li>Fabiano Caruana</li><br/>
                <li>Maxime Vachier-Lagrave</li><br/>
                <li>Wesley So</li><br/>
                <li>Alexander Grischuk</li><br/>
                <li>Levon Aronian</li><br/>
            </ol>
            
            <h3>Melhores jogadores de Xadrez Blitz</h3>
            <ol>
                <li>Magnus Carlsen</li><br/>
                <li>Hikaru Nakamura</li><br/>
                <li>Maxime Vachier-Lagrave</li><br/>
                <li>Viswanathan Anand</li><br/>
                <li>Wesley So </li><br/>
                <li>Alireza Firouzja</li><br/>
                <li>Yangyi Yu</li><br/>
                <li>Ian Nepomniachtchi</li><br/>
                <li>Jan-Krzysztof Duda</li><br/>
                <li>Ding Liren</li><br/>
            </ol>    
        </div>
    );
}

export default Trivia;