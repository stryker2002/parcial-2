"use client";

import { UserTable, UserTopbar } from "@/components";
import { getData, postCreate, postDelete, postUpdate } from "@/services";
import { useCallback, useState } from "react";

export default function Home() {
    const [data, setData] = useState();

    const handleCreate = useCallback(async (body) => {
        const data = await postCreate(body);

        console.log("respuesta", data);
    }, []);

    const handleUpdate = useCallback(async (body) => {
        const data = await postUpdate(body);

        console.log(data);
    });

    const handleSearch = useCallback(async (id) => {
        const data = await getData(id);

        setData(data);
    });

    const handleDelete = useCallback(async (id) => {
        const data = await postDelete(id);

        console.log("respuesta", data);
    });

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="h-16 bg-gray-500 w-full" />

            <section className="relative flex flex-col p-8 gap-8 items-center w-full">
                <img
                    src="/logo.png"
                    className="absolute h-[600px] -z-10 opacity-25"
                />

                <UserTopbar
                    handleSerach={handleSearch}
                    handleDelete={handleDelete}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                />
                <UserTable data={data} />
            </section>
        </main>
    );
}
