import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';

import './navbar.css'

const Navbar = () =>{
    const { signOut, user, signed } = useAuth();


    return (
        <div id="nav-container">
            <div className="nav-items">
                <Link to="https://discord.com/channels/452926217558163456/540987396532207638" className="nav-link">
                    <img src="https://cdn.discordapp.com/icons/452926217558163456/a_29595be8ac4681524062a3226c054073.png?size=128" alt="microsoft"/>
                </Link>
                
                {signed && 
                    <Link to="/face-recognition" className="nav-strong">Face Detection</Link>
                }

            </div>

                { signed &&
                    <div className="user-info">
                        <strong>{user.user.name}</strong>
                        <button type="button" className="signOut"
                            onClick={() => signOut()}
                        >
                            SignOut
                        </button>

                    </div>
                }


        </div>
    );
}

export default Navbar; 