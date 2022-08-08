window.app = {
    config: { apiUrl: "http://localhost:3000/api/v1" },
    domqs: document.querySelector.bind(document),
};

window.app.ajaxAdapter = async (method, url, body, headers = {}) => {
    headers["Content-Type"] = "application/json";

    const response = await fetch(`${window.app.config.apiUrl}/${url}`, {
        method,
        headers,
        body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();

    return jsonResponse;
};

window.app.showDataTables = async (url, el) => {
    const element = window.app.domqs(el);

    fetch(`${window.app.config.apiUrl}/${url}`)
        .then((res) => res.json())
        .then((obj) => {
            const { data } = obj;
            let output = "";
            data.forEach((value) => {
                output += `
                    <tr>
                        <td>${value.name}</td>
                        <td>${value.description}</td>
                        <td>${value.createdAt}</td>
                        <td>${value.updatedAt}</td>
                    </tr>
                `;
            });

            element.innerHTML += output;
        })
        .catch((err) => console.error(err));
};

window.app.dropDownList= function(url, el) {
    const selectdrop = window.app.domqs(el);

    fetch(`${window.app.config.apiUrl}/${url}`)
        .then((res) => {
            return res.json();
        })
        .then((obj) => {
            const { data } = obj
            let output = "";
            data.forEach(value => {
                output += `<option value="${value.id}">${value.name}</option>` 
            })

            selectdrop.innerHTML += output;
        })
        .catch((err) => console.error(err));
}
