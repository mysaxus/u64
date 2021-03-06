import React, { useEffect, useState } from 'react';

import { useAuth } from './contexts/AuthContext';

import TutorialAdv from './TutorialAdv';
import TutorialInter from './TutorialInter';
import TutorialBasic from './TutorialBasic';

import {db} from './services/firebase';
import { collection, getDocs} from 'firebase/firestore';

export default function TutorialLanding(){

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

    function tutorialPage(x){
        if(x<1400){
            return <TutorialBasic />
        }
        else if(x<1800){
            return <TutorialInter />
        }
        else{
            return <TutorialAdv />
        }
    }

    return (
        users.map((user) => {
            if(user.email === currentUser.email){
                return (tutorialPage(user.rating))
            }
        }))
}