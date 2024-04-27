"use server";

export async function postDelete(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        id: id,
    });

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const response = await fetch(
        "http://localhost:3001/borrar",
        requestOptions
    );

    const data = await response.json();

    console.log(data);

    return data;
}
