const domqs = document.querySelector.bind(document);

window.onload = async function() {

    domqs('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const formData = {
            name: domqs('#name__input').value,
            description: domqs('#description__input').value
        }

        await fetch('http://localhost:3000/categories', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            mode: 'cors',
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then(async(res) => console.log(res) )
        .catch(async(res) => console.log(res))
    })

}
document.addEventListener("DOMContentLoaded", () => {
    const tbody = domqs('tbody');

    fetch('http://localhost:3000/api/v1/categories')
        .then(res => res.json() )
        .then(obj => {
            const { data } = obj
            let output = "";
            data.forEach(value => {
                output += `
                    <tr>
                        <td>${value.name}></td>
                        <td>${value.description}</td>
                    <tr>
                `
            })

            tbody.innerHTML += output;
        })
        .catch(err => console.error(err));
})
