const ConsultaComercio = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow max-w-full mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Consulta y Comercio</h2>

                <div className="flex flex-col sm:flex-row gap-2 mb-4">

                    {/* Input buscar */}
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg p-2.5 w-full sm:w-80" placeholder="Buscar empresa..." />

                    {/* dotonde buscar */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600
                     sm:ml-2">
                        Buscar
                    </button>
                </div>

                <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                        {/* tabla comercio */}
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {/* columnas*/}
                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs 
                                        font-medium text-gray-500 uppercase tracking-wider border
                                         border-gray-300">Comercio</th>

                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs 
                                        font-medium text-gray-500 uppercase tracking-wider border
                                         border-gray-300">Fecha</th>

                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs 
                                        font-medium text-gray-500 uppercase tracking-wider border
                                         border-gray-300">Monto</th>

                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs 
                                        font-medium text-gray-500 uppercase tracking-wider border
                                         border-gray-300">Estado</th>
                                    </tr>
                                </thead>

                                {/* celdas */}
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs
                                     sm:text-sm font-medium text-gray-900 border border-gray-300">comercio</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs
                                     sm:text-sm text-gray-900 border border-gray-300">fecha</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs 
                                     sm:text-sm text-gray-900 border border-gray-300">monto</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs 
                                     sm:text-sm text-gray-900 border border-gray-300">estado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConsultaComercio;
