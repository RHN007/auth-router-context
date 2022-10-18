import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../context/UserContext'

const Header = () => {
    const {user,logOut} = useContext(AuthContext); 
    console.log('context', user)

    const handleSingOut = () => {
        logOut()
        .then(()=> {})
        .catch(()=> {})
    }

    return (
        <div>
          
            <div className="navbar bg-primary text-primary-content">
             <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/Registration'>Registration</Link>
             {user?.email && <span>Welcome, {user.email}</span> }
             {
                user?.email?
                <button onClick={handleSingOut} className="btn btn-sm">Log Out</button>:<Link to='/login'>Login</Link>
             }
             
             
</div>
        </div>
    );
};

export default Header;