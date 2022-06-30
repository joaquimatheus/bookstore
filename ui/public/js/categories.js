window.onload = () => {
    const domqs = document.querySelector.bind(document);

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
