import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import { useAuth } from '../../context/auth';

import './landing.css'


const Landing = () => {
    const { signIn, signed } = useAuth();

    return (
        <div id="landing-container">
            <Navbar />

            <main>
                <div className="landing-title">
                    <h1>
                        <span>Microsoft</span>
                        <span>he4rt</span>
                        <span>chalenge</span>

                    </h1>
                </div>

                <div className="landing-text">
                    <p>Um desafio para instigar programadores a desenvolver usando o Microsoft Graph.</p>
                
                    { !signed &&
                        <div className="user-info">
                            <button type="button" className="signIn"
                                onClick={() => signIn()}
                            >
                                SignIn
                            </button>

                        </div>
                    }
                </div>


            </main>

        </div>
    )
}

export default Landing; 