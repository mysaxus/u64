import React, {useRef}  from 'react';

import './stylesheets/style.css';
import './stylesheets/signup.css';

import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';

import {db} from './services/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function SignUp(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    const createUser = async () => {
        await addDoc(usersCollectionRef, {email: email, nick: nick, rating: 1000, nivel: false})
    }


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
                    <input placeholder="example@gmail.com" onChange={(event) => {setEmail(event.target.value)}} type="text" name="email" ref={emailRef} required/>

                    <label className="question">Nickname:</label>
                    <input placeholder="nick123" onChange={(event) =>{setNick(event.target.value)}} type="text" name="nick" required/>

                    <label className="question">Senha:</label>
                    <input placeholder="password" type="password" name="password" ref={passwordRef} required/>

                    <label className="question">Confirmar senha:</label>
                    <input placeholder="password_again" type="password" name="passwordconfirm" ref={passwordConfirmRef} required/>

                    <a href="#"><input onClick={createUser} disabled={loading} className="button" type="submit" value="Registrar conta"/></a>
                </form>
            </div>
        </div>
    );
}

export default SignUp;