window.onload = () => {
    const { domqs, ajaxAdapter, showDataTables } = window.app;

    domqs('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const formData = {
            name: domqs('#name__input').value,
            description: domqs('#description__input').value
        }

        await ajaxAdapter("POST", 'product-management/publishers', formData)
            .then( async (res) => {
                alert(`The publisher is created your id is ${res.publisherId}`)
            })
            .catch(async (res) => console.log(res));
    });

    showDataTables('product-management/publishers', 'tbody');
}
