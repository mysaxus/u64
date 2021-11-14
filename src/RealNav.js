import { useAuth } from './contexts/AuthContext';

import Nav from './Nav';
import NavLogged from './NavLogged';

export default function RealNav(){

    const { currentUser } = useAuth();

    return( currentUser ? <NavLogged /> : <Nav />)
}