import { useState, useEffect } from 'react';
import getItems from '../helpers/getItems';

function DropDownList(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const items = async api => {
            let response = await getItems(api);
            let { data } = response.data;
            setItems(data);
        }

        items(props.endpoint);
    }, [])

    console.log(items);

    return (
        <select
            name={props.name}
            onChange={props.handleChange}
            value={props.stateValue}
            id={props.name}
            required
        >
            <option value="" selected disabled >{props.name}</option>
            {items && items.map((item) => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>

    )
}

export default DropDownList;
