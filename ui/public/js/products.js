window.onload = async function () {
    const { domqs, dropDownList, ajaxAdapter } = window.app;

    const shorthandApi = {
        categories: 'product-management/categories/shorthand',
        translators: 'product-management/translators/shorthand',
        authors: 'product-management/authors/shorthand',
        publishers: 'product-management/publishers/shorthand'
    }


    function main() {
        dropDownList(shorthandApi.categories, '#categories')
        dropDownList(shorthandApi.translators, '#translators')
        dropDownList(shorthandApi.authors, '#authors')
        dropDownList(shorthandApi.publishers, '#publishers')
    }

    main()

    domqs('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const formData = {
            name: domqs('#name_book').value,
            description: domqs('#description_book').value,
            category_id: domqs('#categories').value,
            publisher_id: domqs('#publishers').value,
            author_id: domqs('#authors').value,
            translator_id: domqs('#translators').value,
            publishers: domqs('#publishers').value,
            pages: domqs('#number_pages').value,
            language: domqs('#language').value,
            price: domqs('#price').value,
            isbn10: domqs('#isbn10').value,
            isbn13: domqs('#isbn13').value
        };

        await ajaxAdapter('POST', 'product-management/products', formData)
            .then(async (res) => {
                alert(`The product is created your id is ${res.productId}`);
            })
            .catch(async (res) => console.log(res));
    });

};
