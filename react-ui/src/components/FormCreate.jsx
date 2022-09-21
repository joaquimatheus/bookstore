import { useState } from "react";
import TableProduct from "./TableProduct";

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

        console.log('*** handleSubmit', data)
    }

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
                        <button>Submit</button>
                    </div>
                </form>

                <TableProduct title={props.title} />
            </div>
        </>
    );
}

export default FormCreate;
