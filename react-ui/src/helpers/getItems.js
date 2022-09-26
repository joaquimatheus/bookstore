import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api/v1/product-management'

export default async function getItems(endpoint) {
    const url = `${BASE_URL}/${endpoint}/shorthand`;

    let apiReturn = await axios
        .get(url)
        .then(async (response) => {
            return response;
        })
        .catch((err) => {
            console.error(err);
        })
    return apiReturn;
}
