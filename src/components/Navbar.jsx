import { Link } from "react-router-dom";

import { Login, Signup } from "../index"

const Navbar = ({ handleShowLogin, showLogin, handleShowSubmit, showSignup, handleLogin, handleSignup }) => {

    return (

        <nav className="flex flex-row justify-evenly py-4">

            <Link to="/" className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Home</Link>

            <button onClick={handleShowLogin} className="mx-2 bg-transparent text-slate-100 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Login</button>

            <button onClick={handleShowSubmit} className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Signup</button>

            {showLogin && <Login handleLogin={handleLogin} />}

            {showSignup && <Signup handleSignup={handleSignup} />}

        </nav>

    );
    
};

export default Navbar;