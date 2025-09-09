import { NavLink } from "react-router-dom";
import './styles.css';

function Header(){
    return (
        <>
          <header className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                    <span className="text-blue-700 text-4xl font-extrabold tracking-wide drop-shadow-lg">
                        Alumnet
                    </span>
                    <nav className="flex gap-6">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-purple-600 font-bold underline' : 'text-blue-700 hover:text-purple-600 transition'}>
                            Home
                        </NavLink>
                        <NavLink to={'/register'} className={({ isActive }) => isActive ? 'text-purple-600 font-bold underline' : 'text-blue-700 hover:text-purple-600 transition'}>
                            SignUp
                        </NavLink>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-purple-600 font-bold underline' : 'text-blue-700 hover:text-purple-600 transition'}>
                            SignIn
                        </NavLink>
                        <NavLink to={'/feed'} className={({ isActive }) => isActive ? 'text-purple-600 font-bold underline' : 'text-blue-700 hover:text-purple-600 transition'}>
                            Feed
                        </NavLink>
                    </nav>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="bg-white text-purple-600 px-3 py-1 rounded-full font-semibold shadow border border-purple-200">
                            Connecting Alumni
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;


