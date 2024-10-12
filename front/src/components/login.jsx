import { React } from 'react';
import { User, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/start'); // direccion a pagina start
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-800">

                {/* formulagio login*/}
                <div className="bg-white p-8 rounded-lg shadow-md w-96">

                    {/* logo */}
                    <div className="w-20 h-20 mb-6 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <img src={logo} alt="Logo" className="object-cover" />
                    </div>

                    {/* titulo */}
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                    {/* formulario*/}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* input usuario */}
                        <div className="relative">
                            <User className="absolute top-3 left-3 text-gray-400" size={22} />
                            <input type="text" placeholder="Username" className="pl-12 w-full px-4 py-3
                         bg-gray-100 border border-gray-300 rounded-md shadow-sm text-base 
                         focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>

                        {/* input contrasena */}
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-400" size={22} />
                            <input type="password" placeholder="Password" className="pl-12 w-full px-4 
                        py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-base
                         focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        {/* boton iniciar sesion */}
                        <button type="submit" className="w-full py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-base font-medium text-white bg-indigo-600
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-indigo-500">Sign In </button>
                    </form>
                </div>
            </div>
        </>
    );
}
