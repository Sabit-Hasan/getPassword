import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-green-100 flex justify-between items-center px-4 h-14">
                <div className="logo font-bold">
                    <span className="text-yellow-500 font-bold text-xl">get</span><span className="text-green-800 font-bold text-xl">Password</span></div>
                <ul>
                    <li className="flex gap-4">
                       <NavLink className="hover:font-bold" to="/">Home</NavLink> 
                        <NavLink className="hover:font-bold" to="about">About</NavLink>
                        <NavLink className="hover:font-bold" to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}