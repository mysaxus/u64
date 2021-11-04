import React from 'react';

import './stylesheets/login.css';

function Login(){
    return(
        <div class="login">
            <div class="header">
                <h1>Adentre no U64</h1>
                <h2>Faça login</h2>
        <div class="form box">
            <form>
                <label class="question">Email:</label>
                <br/>
                <br/>
                <input type="text" name=""/>
                <br/>
                <br/>
                <label class="question">Senha:</label>
                <br/>
                <br/>
                <input type="password" name=""/>
                <br/>
                <br/>
                <input class="button" type="button" onclick="alert('Login realizado com sucesso!')" value="Fazer login"/>
                <br/>
            </form>
        </div>

        <h2>Crie sua conta</h2>
        <div class="form box">
            <form>
                <h4>Preencha os dados:</h4>
                <label class="question">Email:</label>
                <br/>
                <br/>
                <input type="text" name=""/>
                <br/>
                <br/>
                <label class="question">Senha:</label>
                <br/>
                <br/>
                <input type="password" name=""/>
                <br/>
                <br/>
                <label class="question">Confirmar senha:</label>
                <br/>
                <br/>
                <input type="password" name=""/>
                <br/>
                <br/>
                <div class="options">
                    <label class="question">Quão bem você joga xadrez?</label><br/><br/>

                    <input type="radio" name="createacc" id="leigo" value="1"/>
                    <label for="1">Nunca joguei</label><br/><br/>

                    <input type="radio" name="createacc" id="basico" value="2"/>
                    <label for="2">Sei mover as peças</label><br/><br/>

                    <input type="radio" name="createacc" id="engajado" value="3"/>
                    <label for="3">Jogo casualmente</label><br/><br/>

                    <input type="radio" name="createacc" id="intermediario" value="4"/>
                    <label for="4">Jogo com frequência</label><br/><br/>

                    <input type="radio" name="createacc" id="avançado" value="5"/>
                    <label for="5">Meu rating é 2000+</label><br/><br/>
                </div>

                <div class="options">
                    <label class="question">Selecione seus jogadores favoritos</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Magnus Carlsen</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Fabiano Caruana</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Ding Liren</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Garry Kasparov</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Anatoly Karpov</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Tigran Petrosian</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Bobby Fischer</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Hikaru Nakamura</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Emanuel Lasker</label><br/><br/>

                    <input type="checkbox"/>
                    <label>Paul Morphy</label><br/><br/>

                    <input type="checkbox"/>
                    <label> Danill Dubov</label><br/><br/>
            </div>

            <input class="button" type="button" onclick="alert('Conta registrada com sucesso!')" value="Registrar conta"/>

            </form>
        </div>
            </div>
        </div>
    );
}

export default Login;