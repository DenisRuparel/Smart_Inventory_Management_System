import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
        name: undefined
    });

    const { dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}auth/signup`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const result = await res.json()

            if (!res.ok) {
                toast.error(result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                dispatch({ type: 'REGISTER_SUCCESS' })
                navigate('/signin')
            }

        }
        catch (err) {
            alert(err.message)
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className="container forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Create an Account</header>
                        <form onSubmit={handleClick}>
                            <div className="field input-field">
                                <input type="text" name="name" id="name" placeholder="Your Name" className="input" onChange={handleChange} />
                            </div>

                            <div className="field input-field">
                                <input type="email" name="email" id="email" placeholder="Email" className="input" onChange={handleChange} />
                            </div>

                            <div className="field input-field">
                                <input type="password" name="password" id="password" placeholder="Password" className="password" onChange={handleChange} />
                            </div>

                            <div className="field button-field">
                                <button>Sign Up</button>
                            </div>
                        </form>

                        <div className="form-link">
                            <span>Already have an account? <a href="/signin" className="link signup-link"><Link to='/signin'>Sign In</Link></a></span>
                        </div>
                    </div>

                    {/* <div className="line"></div>

                    <div className="media-options">
                        <a href="/" className="field facebook">
                            <i className='bx bxl-facebook facebook-icon'></i>
                            <span>Login with Facebook</span>
                        </a>
                    </div>

                    <div className="media-options">
                        <a href="/" className="field google">
                            <img src="assets/img/google.png" alt="" className="google-img" />
                            <span>Login with Google</span>
                        </a>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Signup
