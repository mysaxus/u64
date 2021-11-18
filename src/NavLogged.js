import React, {useEffect, useState } from 'react';

import './stylesheets/style.css';
import './stylesheets/nav.css';

import { collection, getDocs} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';
import {db} from './services/firebase';

function NavLogged(){

    const {currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")
    
    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    return(

        <header>
            <nav>
                <b>U64</b>
                <ul className="nav"> 
                    <li><a href="/">Página inicial</a></li>
                    <li><a href="/tutorial">Tutorial</a></li>
                    <li><a href="/content">Conteúdos</a></li>
                    <li><a href="/news">Noticias</a></li>
                    <li><a href="/about">Sobre nós</a></li>
                </ul>
                <ul className="nav">
                    {users.map((user) => {
                        if(user.email === currentUser.email){
                            return(
                                <li><a className="button" href="/account">{user.nick}</a></li>
                            )
                    }})}
                    
                </ul>
            </nav>
        </header>
    );
}

export default NavLogged;