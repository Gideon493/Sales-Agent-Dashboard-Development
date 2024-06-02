import { useState } from "react";

import { Link } from "react-router-dom";

const Signup = ({ handleSignup }) => {

    const [username, setUserName] = useState("");

    const [password, setPassword] = useState("");

    return (

        <div className="w-3/6 absolute mt-20 p-4 flex flex-col">

            <form action="" className="bg-slate-50 flex flex-col w-4/6 p-4 my-4 rounded-md shadow-xl">

                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" className="outline-none p-2 my-6 shadow-lg rounded-md bg-transparent border border-slate-400 focus:scale-105 duration-150" />

                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="outline-none p-2 my-6 shadow-lg rounded-md bg-transparent border border-slate-400 focus:scale-105 duration-150" />

                <button onClick={handleSignup} className="outline-none py-2 my-2 bg-transparent rounded-md shadow-lg border border-slate-400 focus:scale-105 duration-150">Signup</button>

                <div className="flex flex-row my-4">

                    <h3>Don't have an account</h3> <Link to="/login" className="mx-2 text-blue-500">Login</Link>

                </div>

            </form>

        </div>
    );
}

export default Signup;