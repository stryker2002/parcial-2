import { useState } from "react";
import Modal from "./Modal";

function UserTopbar({
    handleSerach,
    handleDelete,
    handleCreate,
    handleUpdate,
}) {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState();

    const handleView = (type) => {
        switch (type) {
            case "create":
                setVisible(true);
                setType("create");
                break;

            case "search":
                setVisible(true);
                setType("search");
                break;

            case "delete":
                setVisible(true);
                setType("delete");
                break;

            case "searchUpdate":
                setVisible(true);
                setType("searchUpdate");
                break;
            default:
                break;
        }
    };

    const handleSelectId = (id) => {
        console.log(id);
    };

    return (
        <>
            <div name="navbar" className="flex gap-8">
                <button
                    className="h-9 w-28 mx-auto bg-red-800 hover:bg-red-700 hover:scale-110 text-white rounded-md"
                    onClick={() => handleView("create")}
                >
                    Crear
                </button>
                <button
                    className="h-9 w-28 mx-auto bg-red-800 hover:bg-red-700 hover:scale-110 text-white rounded-md"
                    onClick={() => handleView("searchUpdate")}
                >
                    Actualizar
                </button>
                <button
                    className="h-9 w-28 mx-auto bg-red-800 hover:bg-red-700 hover:scale-110 text-white rounded-md"
                    onClick={() => handleView("search")}
                >
                    Buscar
                </button>
                <button
                    className="h-9 w-28 mx-auto bg-red-800 hover:bg-red-700 hover:scale-110 text-white rounded-md"
                    onClick={() => handleView("delete")}
                >
                    Eliminar
                </button>
            </div>

            <Modal
                visible={visible}
                setVisible={setVisible}
                type={type}
                setType={setType}
                handleSerach={handleSerach}
                handleDelete={handleDelete}
                handleCreate={handleCreate}
                handleUpdate={handleUpdate}
            />
        </>
    );
}

export default UserTopbar;
