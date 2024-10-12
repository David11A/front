import React, { useState } from 'react';

const ConsultaFecha = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow max-w-full mx-auto">
                <h2 className="text-xl font-bold mb-4">Consulta por Fechas</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {/* echa Inicial */}
                    <div className="flex flex-col flex-grow">
                        <label className="text-gray-700">Fecha Inicial</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 h-10" />
                        <p className="text-xs text-gray-500 mt-1">Selecciona la fecha de inicio:</p>
                    </div>

                    {/* fecha Final */}
                    <div className="flex flex-col flex-grow">
                        <label className="text-gray-700">Fecha Final</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 h-10" />
                        <p className="text-xs text-gray-500 mt-1">Selecciona la fecha de fin:</p>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600
                     sm:ml-2">
                        Buscar
                    </button>

                <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                        {/* tabla fecha */}
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {/* columnas */}
                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Comercio</th>
                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Fecha</th>
                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Monto</th>
                                        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Estado</th>
                                    </tr>
                                </thead>

                                {/* celdas  */}
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 border border-gray-300">comercio</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 border border-gray-300">fecha</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 border border-gray-300">monto</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 border border-gray-300">estado</td>
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

export default ConsultaFecha;
