window.onload = async function () {
    const domqs = document.querySelector.bind(document);

    const shorthandApi = {
        categories: 'http://localhost:3000/api/v1/categories/shorthand',
        translators: 'http://localhost:3000/api/v1/translators/shorthand',
        authors: 'http://localhost:3000/api/v1/authors/shorthand',
        publishers: 'http://localhost:3000/api/v1/publishers/shorthand'
    }

    async function dropDownList(url, idSelector) {
        document.addEventListener("DOMContentLoaded", async () => {
            const selectDrop = domqs(idSelector);

            await fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((obj) => {
                    const { data } = obj
                    let output = "";
                    data.forEach(value => {
                        output += `<option value="${value.id}">${value.name}</option>` 
                    })

                    selectDrop.innerHTML += output;
                })
                .catch((err) => console.error(err));
        });
    }

    function main() {
        dropDownList(shorthandApi.categories, '#categories')
        dropDownList(shorthandApi.translators, '#translators')
        dropDownList(shorthandApi.authors, '#authors')
        dropDownList(shorthandApi.publishers, '#publishers')
    }

    main();
}();
