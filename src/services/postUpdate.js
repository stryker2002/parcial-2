"use server";

export async function postUpdate(body) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow",
    };

    const response = await fetch(
        "http://localhost:3001/actualizar",
        requestOptions
    );

    const data = await response.json();

    console.log(data);

    return data;
}
