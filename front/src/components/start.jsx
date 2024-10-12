import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaBars, FaTimes, FaChartBar, FaFileAlt, FaCog, FaFolderOpen } from 'react-icons/fa';
import ConsultaComercio from './ConsultaComercio';
import logo from '../assets/logo.png';
import Footersti from './Footersti';
import ConsultaFecha from './ConsultaFecha';


export default function Start() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [sidebarAbierto, setSidebarAbierto] = useState(false);
    const [consultaSubmenuAbierto, setConsultaSubmenuAbierto] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const toggleMenu = () => setMenuAbierto(!menuAbierto);
    const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);
    const toggleConsultaSubmenu = () => setConsultaSubmenuAbierto(!consultaSubmenuAbierto);
    const showConsultaComercio = () => setActiveComponent('comercio');
    const showConsultaFecha = () => setActiveComponent('fecha');

    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">

                {/* header */}
                <header className="bg-gray-800 text-white shadow-md p-4">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center">
                            <button onClick={toggleSidebar} className="mr-2 lg:hidden">
                                <FaBars className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </button>
                            <img src={logo} alt="Logo" className="w-10" />
                        </div>

                        <div className="flex-grow mx-4">
                            <div className="relative">
                            </div>
                        </div>

                        <div className="relative">
                            <button onClick={toggleMenu} className="flex items-center space-x-2 focus:outline-none">
                                <img src={logo} alt="User avatar" className=" w-8 rounded-full" />
                                <FaChevronDown className="h-4 w-4" />
                            </button>
                            {menuAbierto && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opción 1</button>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opción 2</button>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opción 3</button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* main  */}
                <main className="flex-grow  p-0 mx-0 mt-0 flex">

                    {/* menu izquierdo */}
                    <aside className={`fixed inset-y-0 left-0 transform ${sidebarAbierto ? 'translate-x-0' : '-translate-x-full'} 
                    w-64 bg-gray-800 text-white p-4 transition duration-200 ease-in-out lg:relative lg:translate-x-0`}>
                        <button onClick={toggleSidebar} className="absolute top-4 right-4 lg:hidden">
                            <FaTimes className="h-6 w-6" />
                        </button>
                        <nav className="mt-8">
                            <ul className="space-y-2">
                                <li>
                                    <button onClick={toggleConsultaSubmenu} className="flex justify-between
                                 w-full p-2 hover:bg-gray-700 rounded focus:outline-none">
                                        <div className="flex items-center space-x-2">
                                            <FaFolderOpen />
                                            <span>Consulta</span>
                                        </div>
                                        <FaChevronDown />
                                    </button>

                                    {/* submenu */}
                                    {consultaSubmenuAbierto && (
                                        <ul className="pl-8 space-y-2">
                                            <li>
                                                <button onClick={showConsultaComercio} className="flex
                                             items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                                    <FaArrowRight className="h-5 w-5" />
                                                    <span>Consulta Comercio</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={showConsultaFecha} className="flex 
                                            items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                                    <FaArrowRight className="h-5 w-5" />
                                                    <span>Consulta Fecha</span>
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 
                                rounded">
                                        <FaFileAlt />
                                        <span>Reporte</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 
                                rounded">
                                        <FaChartBar />
                                        <span>Auditoría</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 
                                rounded">
                                        <FaCog />
                                        <span>Ajustes</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* renderisando componente activo en el estado */}
                    <section className="flex-grow bg-white p-4 rounded-lg shadow ">
                        {activeComponent === 'comercio' && <ConsultaComercio />}
                        {activeComponent === 'fecha' && <ConsultaFecha />}
                    </section>
                </main>

                {/* footer */}
                <Footersti />
            </div>
        </>
    );
}
