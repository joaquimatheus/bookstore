import { useState } from "react";
import TableProduct from "./TableProduct";

function FormCreate(props) {
    const [FormValues, setFormValues] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`handleInput ${name, value}`)
    }

    return (
        <>
            <div className="content-product">
                <form>
                    <h2>{props.title}</h2>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input 
                            id="name" 
                            type="text" 
                            name="name" 
                            onChange={handleInputChange}
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
