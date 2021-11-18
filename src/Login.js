import React, {useRef, useState } from 'react';

import './stylesheets/style.css';
import './stylesheets/login.css';
import loginimg from './images/signinimg.png';
import { useAuth } from './contexts/AuthContext';
import {useHistory } from 'react-router-dom';

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const { login } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/account");
        } catch{
            setError('E-mail e/ou senha incorretos')
        }
        setLoading(false)
    }

    return(
        <div className="login">
            <div className="header">
                <h1>Faça login</h1>
                <h2>Para poder acessar tutoriais e outras funções, faça login no U64.</h2>
            </div>
            <div className="loginpage">
                <img src={loginimg} alt="Login"/>
                <div className="form box">
                    <form onSubmit={handleSubmit}>
                        <label className="question">Email:</label>
                        <br/>
                        <br/>
                        <input placeholder="example@gmail.com" type="text" name="" ref={emailRef} required/>
                        <br/>
                        <br/>
                        <label className="question">Senha:</label>
                        <br/>
                        <br/>
                        <input placeholder="password" type="password" name="" ref={passwordRef} required/>
                        <br/>
                        <br/>
                        <input disabled={loading} className="button" type="submit" value="Fazer login"/>
                    </form>
                    <div className="clickhere">
                    {error && <p>{error}</p>}
                        <a href="/signup">Não tem conta? Crie uma agora.</a> 
                    </div>
                    <div className="clickhere">
                        <a href="/forgotpassword">Esqueceu a senha?</a> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;