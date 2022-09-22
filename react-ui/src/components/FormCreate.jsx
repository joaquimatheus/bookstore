import { useState } from "react";
import TableProduct from "./TableProduct";
import Popup from './Popup';
import axios from 'axios';

function FormCreate(props) {
    const initialState = {name: '', description: ''}
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const response = axios.post(
            `http://localhost:4000/api/v1/product-management/${props.endpoint}`, data)
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    console.log('--- formvalues', formValues);
    return (
        <>
            <div className="content-product">
                <form onSubmit={handleSubmit}>
                    <h2>{props.title}</h2>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input 
                            id="name" 
                            type="text" 
                            name="name" 
                            onChange={handleInputChange}
                            value={formValues.name}
                            required />
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            column="20"
                            rows="10"
                            onChange={handleInputChange}
                            value={formValues.description}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group align-center">
                        <button onClick={() => setButtonPopup(true)}>Submit</button>
                    </div>
                </form>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3> You created a item of {props.title}</h3>
                    <p className="popup-name">Name: <span>{formValues.name}</span></p>
                    <p className="popup-description">Description: <span>{formValues.description}</span></p>
                </Popup>

                <TableProduct title={props.title} endpoint={props.endpoint} />
            </div>
        </>
    );
}

export default FormCreate;
