import React, {useRef}  from 'react';

import './stylesheets/style.css';
import './stylesheets/signup.css';

import { useState} from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';

function SignUp(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('As senhas não coincidem')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/account");
        } catch{
            setError('Falha ao criar a conta')
        }
        setLoading(false)
    }


    return(
        <div className="signup">
            <div className="header" id="signup">
                <h2>Crie sua conta</h2>
            </div>
            <div className="hasaccount">
                <a href="/login">Já tem conta? Faça login</a>
            </div>
            {error && <p>{error}</p>}
            <div className="form box">
                <form onSubmit={handleSubmit}>
                    <h4>Preencha os dados:</h4>
                    <label className="question">Email:</label>
                    <input type="text" name="email" ref={emailRef} required/>

                    <label className="question">Senha:</label>
                    <input type="password" name="password" ref={passwordRef} required/>

                    <label className="question">Confirmar senha:</label>
                    <input type="password" name="passwordconfirm" ref={passwordConfirmRef} required/>

                    <div className="options">
                        <label className="question">Quão bem você joga xadrez?</label>

                        <div className="option">
                            <input type="radio" name="createacc" id="leigo" value="1"/>
                            <label htmlFor="1">Nunca joguei</label>
                        </div>

                        <div className="option">
                            <input type="radio" name="createacc" id="basico" value="2"/>
                            <label htmlFor="2">Sei mover as peças</label>
                        </div>

                        <div className="option">
                            <input type="radio" name="createacc" id="engajado" value="3"/>
                            <label htmlFor="3">Jogo casualmente</label>
                        </div>

                        <div className="option">
                            <input type="radio" name="createacc" id="intermediario" value="4"/>
                            <label htmlFor="4">Jogo com frequência</label>
                        </div>

                        <div className="option">
                            <input type="radio" name="createacc" id="avançado" value="5"/>
                            <label htmlFor="5">Meu rating é 2000+</label>
                        </div>
                    </div>

                    <div className="options">
                        <label className="question">Selecione seus jogadores favoritos</label>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Magnus Carlsen</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Fabiano Caruana</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Ding Liren</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Garry Kasparov</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Anatoly Karpov</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Tigran Petrosian</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Bobby Fischer</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Hikaru Nakamura</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Emanuel Lasker</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label>Paul Morphy</label>
                        </div>

                        <div className="option">
                            <input type="checkbox"/>
                            <label> Danill Dubov</label>
                        </div>
                    </div>

                    <a href="#"><input disabled={loading} className="button" type="submit" value="Registrar conta"/></a>
                </form>
            </div>
        </div>
    );
}

export default SignUp;