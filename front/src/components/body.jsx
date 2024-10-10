import React from 'react';
import { FaTimes, FaTh, FaList, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Body = ({ sidebarAbierto, toggleSidebar, datosCards, datosTabla, setVistaCards, vistaCards, anteriorSlide, siguienteSlide, slideActual }) => {
  return (
    <main className="flex-grow container mx-auto mt-4 flex">
      {/* Barra lateral */}
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
  );
};

export default Body;
