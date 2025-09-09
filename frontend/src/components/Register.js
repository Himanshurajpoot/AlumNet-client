import { useState } from 'react';
import { registerUser } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        bio: '',
        graduationYear: '',
        department: ''
    });

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const {name,value} = target;
        setState((prevState)=>({...prevState,[name]: value}))
    }

    const handleRegister = (e) => {
        e.preventDefault();
            //    navigate('/login');

        registerUser(state,setState,navigate)
    }

    return (
        <>
        <form 
            onSubmit={handleRegister} 
            className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow flex flex-col gap-4"
        >
        <h2 className="text-3xl font-bold text-center mt-10 mb-4 text-blue-700">Register</h2>
            <input
                value={state.name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <input
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                value={state.role}
                type="text"
                name="role"
                placeholder="Role Alumni or Student"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                value={state.bio}
                type="text"
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                value={state.graduationYear}
                type="number"
                name="graduationYear"
                placeholder="Graduation year"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                value={state.department}
                type="text"
                name="department"
                placeholder="Department"
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >

                Register
            </button>
        </form>
        </>
    )
}


export default Register;