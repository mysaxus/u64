import React, {useRef, useState} from 'react';
import { useAuth } from './contexts/AuthContext';


import './stylesheets/style.css'
import './stylesheets/forgotpassword.css'

export default function ForgotPassword(){

    const emailRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();

    async function handleReset(e){

        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage("Verifique seu e-mail e acompanhe as instruções.")
        }catch{
            setError('Falha ao enviar e-mail')
        }
        setLoading(false)
    }


    return(
        <div className="forgotpassword">
            <div className="header">
                <h1>Altere sua senha</h1>
            </div>
            <h4>Coloque o e-mail da sua conta e um e-mail para redefinição de senha será enviado.</h4>
            <div className="form box">
                <form onSubmit={handleReset}>
                    <label className="question">Email:</label>
                    <input type="text" name="" ref={emailRef} required/>
                    <input disabled={loading} className="button" type="submit" value="Enviar e-mail"/>
                </form>
                <div className="clickhere">
                    <a href="/login">Voltar</a> 
                </div>
            </div>
            <div className="messages">
                {error && <p className="error">{error}</p>}
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    )
}