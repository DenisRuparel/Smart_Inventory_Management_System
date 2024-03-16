import React from 'react'

function Home() {
    return (
        <>
            <nav role="navigation" className="primary-navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Sign In ▾</a>
                        <ul className="dropdown">
                            <li><a href="/">Sign In as Admin</a></li>
                            <li><a href="/">Sign In as Faculty</a></li>
                            <li><a href="/">Sign In as Student</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Home
