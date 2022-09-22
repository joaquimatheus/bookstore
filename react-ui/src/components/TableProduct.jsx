import { useEffect, useState } from 'react'
import axios from 'axios';

function TableProduct(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/product-management/${props.endpoint}`)
            .then((response) => {
                let { data } = response.data;
                console.log(data)
                setItems(data);
            })
    }, [])
    
    return (
        <table className="table-product">
            <caption>All {props.title}</caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col" className="th-description">Description</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableProduct;
