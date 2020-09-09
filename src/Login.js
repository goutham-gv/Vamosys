import React from 'react';

const login = (props) =>{

    const {
        email, 
        setEmail,
        password, 
        setPassword,
        handleLogin,
        handleSingup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;


    return(
        <section className="Login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                 type="text"
                 autoFocus 
                 required
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                 />
                 <p className="errorMsg">{emailError}</p>

                 <label>password</label>
                 <input
                 type="password" 
                 required
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount ? (
                           <>
                           <button onClick={handleLogin}>Sign in</button>
                           <p>
                            Don't have a account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                            </p>
                           </>
                     ):(
                        <>
                        <button onClick={handleSingup}>Sign Up</button>
                        <p>
                        Have an account ? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                        </>
                     )}
                 </div>

            </div>

        </section>
    );
};

export default login;