import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaCog, FaChevronDown, FaBars, FaTimes, FaList, FaTh, FaArrowLeft, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [vistaCards, setVistaCards] = useState('grid');
  const [slideActual, setSlideActual] = useState(0);
  const [datosTabla, setDatosTabla] = useState([]);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDatosTabla([
        { id: 1, nombre: 'Producto A', categoria: 'Electrónica', precio: 299.99 },
        { id: 2, nombre: 'Producto B', categoria: 'Hogar', precio: 49.99 },
        { id: 3, nombre: 'Producto C', categoria: 'Ropa', precio: 79.99 },
        { id: 4, nombre: 'Producto D', categoria: 'Electrónica', precio: 199.99 },
        { id: 5, nombre: 'Producto E', categoria: 'Hogar', precio: 29.99 },
      ]);
    };
    fetchData();
  }, []);

  const datosCards = [
    { id: 1, titulo: 'Card 1', contenido: 'Contenido de la card 1' },
    { id: 2, titulo: 'Card 2', contenido: 'Contenido de la card 2' },
    { id: 3, titulo: 'Card 3', contenido: 'Contenido de la card 3' },
    { id: 4, titulo: 'Card 4', contenido: 'Contenido de la card 4' },
    { id: 5, titulo: 'Card 5', contenido: 'Contenido de la card 5' },
    { id: 6, titulo: 'Card 6', contenido: 'Contenido de la card 6' },
  ];

  const siguienteSlide = () => {
    setSlideActual((prev) => (prev === Math.floor(datosCards.length / 2) - 1 ? 0 : prev + 1));
  };

  const anteriorSlide = () => {
    setSlideActual((prev) => (prev === 0 ? Math.floor(datosCards.length / 2) - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Encabezado (mantenido como el original) */}
      <header className="bg-gray-800 text-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-2 lg:hidden">
              <FaBars className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </button>
            <img src="/placeholder.svg" alt="Logo de la empresa" className="h-10 w-10" />
          </div>

          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full p-2 pl-10 pr-4 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-700">
              <FaBell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700">
              <FaCog className="h-5 w-5" />
              <span className="sr-only">Configuración</span>
            </button>
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img src="/placeholder.svg" alt="Avatar del usuario" className="h-8 w-8 rounded-full" />
                <FaChevronDown className="h-4 w-4" />
              </button>
              {menuAbierto && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar Sesión</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto mt-4 flex">
        {/* Barra lateral (mantenida como la original) */}
        <aside className={`fixed inset-y-0 left-0 transform ${sidebarAbierto ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-800 text-white p-4 transition duration-200 ease-in-out lg:relative lg:translate-x-0`}>
          <button onClick={toggleSidebar} className="absolute top-4 right-4 lg:hidden">
            <FaTimes className="h-6 w-6" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Inicio</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Productos</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Servicios</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Contacto</a></li>
            </ul>
          </nav>
        </aside>

        {/* Área de contenido principal */}
        <section className="flex-grow bg-white p-4 rounded-lg shadow lg:ml-4 overflow-hidden">
            <h1 className="text-2xl font-bold mb-4">Bienvenido a nuestra plataforma</h1>
            
          {/* Carrusel de botones tipo YouTube */}
          <div className="mb-8 overflow-x-auto whitespace-nowrap">
            {['Todo', 'Música', 'Juegos', 'Noticias', 'Deportes', 'Aprendizaje', 'Moda', 'Tecnología'].map((categoria, index) => (
              <button key={index} className="px-4 py-2 mr-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                {categoria}
              </button>
            ))}
          </div>

          {/* Controles de vista para las cards */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setVistaCards('grid')} className={`mr-2 p-2 ${vistaCards === 'grid' ? 'text-blue-600' : 'text-gray-600'}`}>
              <FaTh />
            </button>
            <button onClick={() => setVistaCards('list')} className={`mr-2 p-2 ${vistaCards === 'list' ? 'text-blue-600' : 'text-gray-600'}`}>
              <FaList />
            </button>
            <button onClick={() => setVistaCards('carousel')} className={`p-2 ${vistaCards === 'carousel' ? 'text-blue-600' : 'text-gray-600'}`}>
              <FaArrowRight />
            </button>
          </div>

          {/* Cards */}
          {vistaCards === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {datosCards.map((card) => (
                   <div key={card.id} className="border rounded-lg p-4 shadow">
                   <h3 className="font-bold mb-2">{card.titulo}</h3>
                  <p>{card.contenido}</p>
                </div>
              ))}
            </div>
          )}

          {vistaCards === 'list' && (
            <div className="space-y-4">
              {datosCards.map((card) => (
                <div key={card.id} className="border rounded-lg p-4 shadow">
                  <h3 className="font-bold mb-2">{card.titulo}</h3>
                  <p>{card.contenido}</p>
                </div>
              ))}
            </div>
          )}

          {vistaCards === 'carousel' && (
            <div className="relative">
              <button onClick={anteriorSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
                <FaArrowLeft />
              </button>
              <div className="flex overflow-hidden">
                {datosCards.slice(slideActual * 2, slideActual * 2 + 2).map((card) => (
                  <div key={card.id} className="border rounded-lg p-4 shadow mx-2">
                    <h3 className="font-bold mb-2">{card.titulo}</h3>
                    <p>{card.contenido}</p>
                  </div>
                ))}
              </div>
              <button onClick={siguienteSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
                <FaArrowRight />
              </button>
            </div>
          )}

          {/* Tabla */}
          <h2 className="text-xl font-bold mt-8 mb-4">Datos de Productos</h2>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2 text-left">ID</th>
                <th className="border border-gray-200 p-2 text-left">Nombre</th>
                <th className="border border-gray-200 p-2 text-left">Categoría</th>
                <th className="border border-gray-200 p-2 text-left">Precio</th>
              </tr>
            </thead>
            <tbody>
              {datosTabla.map((producto) => (
                <tr key={producto.id}>
                  <td className="border border-gray-200 p-2">{producto.id}</td>
                  <td className="border border-gray-200 p-2">{producto.nombre}</td>
                  <td className="border border-gray-200 p-2">{producto.categoria}</td>
                  <td className="border border-gray-200 p-2">${producto.precio.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* Pie de página (mantener como original) */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 front. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
