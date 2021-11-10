
import {useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useHistory } from 'react-router-dom';

import './stylesheets/style.css';
import './stylesheets/account.css';

export function Account(){

    const [error, setError] = useState(''); 
    const {currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout(){
        setError('')

        try{
            await logout();
            history.push('/login');
        }catch{
            setError('Falha ao fazer logout')
        }
    }

    return(
        <div className="account">
            {error && <p>{error}</p>}
            <div className="header">
                <h1>Seu perfil</h1>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Ranking</h2>
                    
                    <h2>Dados pessoais</h2>
                    <strong>Email: </strong>{currentUser.email}
                </div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}