import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        // If login is successful:
        navigate('/profile');
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow flex flex-col gap-4"
        >
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Login</h2>
            <input
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Login
            </button>
        </form>
    );
}

export default Login;


