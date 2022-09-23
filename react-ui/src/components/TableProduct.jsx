import { useEffect, useState } from "react";
import axios from "axios";

function TableProduct(props) {
    const [items, setItems] = useState(null);

    const urlApi = `http://localhost:4000/api/v1/product-management/${props.endpoint}`

    const getData = async ({ api }) => {
        let apiReturn = await axios
            .get(api)
            .then(async (response) => {
                return response;
            })
            .catch((err) => {
                console.error(err);
            })
        return apiReturn;
    }

    useEffect(() => {
        const data = async api => {
            let response = await getData({ api: api })
            let { data } = response.data
            setItems(data);
        }

        data(urlApi);
    }, [])

    return (
        <table className="table-product">
            <caption>All {props.title}</caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col" className="th-description">
                        Description
                    </th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                </tr>
            </thead>
            <tbody>
                {items && items.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableProduct;
