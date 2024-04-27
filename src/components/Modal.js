import { XMarkIcon } from "@/assets";
import { getData } from "@/services/getData";
import React, { useCallback, useEffect, useState } from "react";

function Modal({
    visible,
    setVisible,
    type,
    setType,
    handleSerach,
    handleDelete,
    handleCreate,
    handleUpdate,
}) {
    const [id, setId] = useState();

    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [telefono, setTelefono] = useState();
    const [correo, setCorreo] = useState();
    const [genero, setGenero] = useState();
    const [edad, setEdad] = useState();

    const [data, setData] = useState();

    const handleAction = async (type, value) => {
        switch (type) {
            case "search":
                handleSerach(value);
                setVisible(false);
                setId(undefined);
                break;

            case "delete":
                handleDelete(value);
                setVisible(false);
                setId(undefined);
                handleSerach();
                break;

            case "create":
                handleCreate(value);
                setVisible(false);
                handleResetForm();
                handleSerach();

            case "searchUpdate":
                const response = await getData(value);
                setData(response);
                setType("update");
                break;

            case "update":
                handleUpdate(value);
                setVisible(false);
                setId(undefined);
                handleResetForm();
                handleSerach();
                break;

            default:
                break;
        }
    };

    const handleResetForm = () => {
        setNombre(undefined);
        setApellido(undefined);
        setTelefono(undefined);
        setCorreo(undefined);
        setGenero(undefined);
        setEdad(undefined);
    };

    const handleSendForm = (
        nombre,
        apellido,
        telefono,
        correo,
        genero,
        edad
    ) => {
        const data = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            sexo: genero,
            edad: edad,
        };

        handleAction("create", data);
    };

    const handleUpdateForm = (
        id,
        nombre,
        apellido,
        telefono,
        correo,
        genero,
        edad
    ) => {
        let data = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            sexo: genero,
            edad: edad,
        };

        data = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== undefined)
        );

        handleAction("update", data);
    };

    if (visible && type === "search") {
        return (
            <div className="relative z-40">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                            <div className="flex items-center  gap-8 py-4 px-5">
                                <span className="text-xl text-gray-800 font-bold">
                                    ¿Qué usuario deseas buscar?
                                </span>
                                <XMarkIcon
                                    className="h-6 w-6 stroke-gray-500 stroke-2 cursor-pointer"
                                    onClick={() => {
                                        setVisible(false), setId(undefined);
                                    }}
                                />
                            </div>
                            <div className="flex flex-row gap-2.5 py-4 px-5 justify-between">
                                <input
                                    type="text"
                                    placeholder="Id"
                                    className="h-9 w-36 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <button
                                    className="h-9 w-28 bg-red-800 hover:bg-red-700 text-white rounded-md"
                                    onClick={() => {
                                        handleAction("search", id);
                                    }}
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (visible && type === "delete") {
        return (
            <div className="relative z-40">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                            <div className="flex items-center  gap-8 py-4 px-5">
                                <span className="text-xl text-gray-800 font-bold">
                                    ¿Qué usuario deseas borrar?
                                </span>
                                <XMarkIcon
                                    className="h-6 w-6 stroke-gray-500 stroke-2 cursor-pointer"
                                    onClick={() => {
                                        setVisible(false), setId(undefined);
                                    }}
                                />
                            </div>
                            <div className="flex flex-row gap-2.5 py-4 px-5 justify-between">
                                <input
                                    type="text"
                                    placeholder="Id"
                                    className="h-9 w-36 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <button
                                    className="h-9 w-28 bg-red-800 hover:bg-red-700 text-white rounded-md"
                                    onClick={() => {
                                        handleAction("delete", id);
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (visible && type === "create") {
        return (
            <div className="relative z-40">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                            <div className="flex items-center  gap-8 py-4 px-5">
                                <span className="text-xl text-gray-800 font-bold">
                                    Formulario para crear un usuario
                                </span>
                                <XMarkIcon
                                    className="h-6 w-6 stroke-gray-500 stroke-2 cursor-pointer"
                                    onClick={() => {
                                        setVisible(false), setId(undefined);
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-2.5 py-4 px-5 justify-between">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) =>
                                        setApellido(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Telefono"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) =>
                                        setTelefono(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Correo"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Genero"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setGenero(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Edad"
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setEdad(e.target.value)}
                                />
                                <button
                                    className="h-9 w-28 bg-red-800 hover:bg-red-700 text-white rounded-md"
                                    onClick={() => {
                                        handleSendForm(
                                            nombre,
                                            apellido,
                                            telefono,
                                            correo,
                                            genero,
                                            Number(edad)
                                        );
                                    }}
                                >
                                    Crear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (visible && type === "searchUpdate") {
        return (
            <div className="relative z-40">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                            <div className="flex items-center  gap-8 py-4 px-5">
                                <span className="text-xl text-gray-800 font-bold">
                                    ¿Qué usuario deseas actualizar?
                                </span>
                                <XMarkIcon
                                    className="h-6 w-6 stroke-gray-500 stroke-2 cursor-pointer"
                                    onClick={() => {
                                        setVisible(false), setId(undefined);
                                    }}
                                />
                            </div>
                            <div className="flex flex-row gap-2.5 py-4 px-5 justify-between">
                                <input
                                    type="text"
                                    placeholder="Id"
                                    className="h-9 w-36 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <button
                                    className="h-9 w-28 bg-red-800 hover:bg-red-700 text-white rounded-md"
                                    onClick={() => {
                                        handleAction("searchUpdate", id);
                                    }}
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (visible && type === "update") {
        return (
            <div className="relative z-40">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                            <div className="flex items-center  gap-8 py-4 px-5">
                                <span className="text-xl text-gray-800 font-bold">
                                    Formulario para crear un usuario
                                </span>
                                <XMarkIcon
                                    className="h-6 w-6 stroke-gray-500 stroke-2 cursor-pointer"
                                    onClick={() => {
                                        setVisible(false), setId(undefined);
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-2.5 py-4 px-5 justify-between">
                                <input
                                    type="text"
                                    placeholder={data[0].nombre}
                                    className="hidden h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                />
                                <input
                                    type="text"
                                    placeholder={data[0].nombre}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder={data[0].apellido}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) =>
                                        setApellido(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder={data[0].telefono}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) =>
                                        setTelefono(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder={data[0].correo}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder={data[0].sexo}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setGenero(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder={data[0].edad}
                                    className="h-9 w-52 px-2 outline-red-400 border-2 rounded-lg border-red-200"
                                    onChange={(e) => setEdad(e.target.value)}
                                />
                                <button
                                    className="h-9 w-28 bg-red-800 hover:bg-red-700 text-white rounded-md"
                                    onClick={() => {
                                        handleUpdateForm(
                                            id,
                                            nombre,
                                            apellido,
                                            telefono,
                                            correo,
                                            genero,
                                            Number(edad)
                                        );
                                    }}
                                >
                                    actualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
