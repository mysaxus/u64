
import {useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { deleteUser } from 'firebase/auth';

import './stylesheets/style.css';
import './stylesheets/account.css';

import {db} from './services/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export function Account(){

    const [error, setError] = useState(''); 
    const {currentUser, logout } = useAuth();
    const history = useHistory();

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    const delUser = async (id) =>{
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        await deleteUser(currentUser);
        history.push('/login');
    }

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
                    {users.map((user) => {
                        if(user.email === currentUser.email){
                            return(
                                <div className="box">
                                    <h2>Ranking</h2>
                                    <p className="rating">{user.rating}</p>
                                    <h2>Dados pessoais</h2>
                                    <strong>Email: </strong>{currentUser.email}
                                    <strong>Nickname: </strong>{user.nick}
                                    <div className="buttons">
                                        <button onClick={handleLogout}>Log Out</button>
                                        <button onClick={() => {delUser(user.id)}}>Excluir conta</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </div>
        </div>
    )
}