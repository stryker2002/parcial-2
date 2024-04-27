import React from "react";

function UserTable({ data }) {
    return (
        <div id="table" className="overflow-auto">
            <table className="table-fixed text-base items-center shadow-lg bg-gray-200 rounded-lg">
                <thead className="border-b border-gray-400 text-gray-900 font-medium">
                    <tr className="max-h-16 text-left">
                        <th className="h-fit py-2.5 px-3 min-w-[50px]">Id</th>
                        <th className="h-fit py-2.5 px-3 min-w-[100px]">
                            Nombre
                        </th>
                        <th className="h-fit py-2.5 px-3 min-w-[100px]">
                            Apellido
                        </th>
                        <th className="h-fit py-2.5 px-3 min-w-[100px]">
                            Telefono
                        </th>
                        <th className="h-fit py-2.5 px-3 min-w-[100px]">
                            Correo
                        </th>
                        <th className="h-fit py-2.5 px-3 min-w-[50px]">
                            Genero
                        </th>
                        <th className="h-fit py-2.5 px-3 min-w-[50px]">Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2.5 px-3">{user.id}</td>
                            <td className="py-2.5 px-3">{user.nombre}</td>
                            <td className="py-2.5 px-3">{user.apellido}</td>
                            <td className="py-2.5 px-3">{user.telefono}</td>
                            <td className="py-2.5 px-3">{user.correo}</td>
                            <td className="py-2.5 px-3">{user.sexo}</td>
                            <td className="py-2.5 px-3">{user.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
