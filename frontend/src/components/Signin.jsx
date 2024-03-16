import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './../context/AuthContext'
import { BASE_URL } from './../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
      });
    
      const { dispatch } = useContext(AuthContext)
    
      const navigate = useNavigate()
    
      const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
      }
    
      const handleClick = async e =>{
        e.preventDefault();
    
        dispatch({type:'LOGIN_START'})
        
        try {
          const res = await fetch(`${BASE_URL}auth/signin`, {
            method: 'post',
            headers:{
              'content-type':'application/json'
            },
            credentials:'include',
            body: JSON.stringify(credentials)
          })
    
          const result = await res.json()
    
          if(!res.ok){
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
          else{
            console.log(result.data)
      
            dispatch({type:'LOGIN_SUCCESS', payload: result.data})
            navigate('/admin/dashboard')
          }
        } catch (error) {
          dispatch({type:'LOGIN_FAILURE', payload: error.message})
        }
      }
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
                    <header>Sign In</header>
                    <form onSubmit={handleClick}>
                        <div className="field input-field">
                            <input type="email" name="email" id="email" placeholder="Email" className="input" onChange={handleChange}/>
                        </div>

                        <div className="field input-field">
                            <input type="password" name="password" id="password" placeholder="Password" className="password" onChange={handleChange}/>
                        </div>

                        <div className="form-link">
                            <a href="/forgotpassword" className="forgot-pass">Forgot password?</a>
                        </div>

                        <div className="field button-field">
                            <button>Sign In</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <a href="/signup" className="link signup-link"><Link to='/signup'>Sign Up</Link></a></span>
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
                        <img src="../assets/img/google.png" alt="" className="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>  */}

            </div>
    </section>
    </>
  )
}

export default Signin
