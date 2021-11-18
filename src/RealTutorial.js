import React, { useEffect, useState } from 'react';

import { useAuth } from './contexts/AuthContext';

import TutorialLanding from './TutorialLanding';
import TutorialTest from './TutorialTest';

import {db} from './services/firebase';
import { collection, getDocs} from 'firebase/firestore';

export default function RealTutorial(){

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

    return (
        users.map((user) => {
            if(user.email === currentUser.email){
                return (user.nivel ? <TutorialLanding /> : <TutorialTest />)
            }
        }))
}