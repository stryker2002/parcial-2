"use server";

export async function getData(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        id: id,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const response = await fetch(
        "http://localhost:3001/obtener",
        requestOptions
    );

    const data = await response.json();

    console.log(data);

    return data;
}
