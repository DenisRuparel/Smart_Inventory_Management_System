import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <>
        <section className="container forms">
        <div className="form login">
                <div className="form-content">
                    <header>Forgot Password?</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field button-field">
                            <button>Submit</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <a href="/signup" className="link signup-link"><Link to='/signup'>Signup</Link></a></span>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default ForgotPassword
