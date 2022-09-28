import { useState } from "react";
import DropDownList from './DropDownList'

function FormProduct(props) {
    const initialState = {
        name: "",
        description: "",
        category: "",
        author: "",
        publisher: "",
        translator: "",
        pages: "",
        languages: ""
    };

    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    console.log("--- formValues", formValues);

    return (
        <>
            <div className="content-product">
                <form onSubmit={handleSubmit}>
                    <h2>Products</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            value={formValues.name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
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
                    <div className="form-group">
                        <div className="options-details">
                            <div className="item-details">
                                <label htmlFor="category">Category</label>
                                <DropDownList 
                                    name="Category" 
                                    handleChange={handleInputChange} 
                                    stateValue={formValues.category}
                                    endpoint="categories"
                                    required
                                />
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Author</label>
                                <DropDownList 
                                    name="Author"
                                    handleChange={handleInputChange}
                                    stateValue={formValues.author}
                                    endpoint="authors"
                                    required
                                />
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Publisher</label>
                                <DropDownList 
                                    name="Publisher"
                                    handleChange={handleInputChange}
                                    stateValue={formValues.publisher}
                                    endpoint="publishers"
                                    required
                                />
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Translator</label>
                                <DropDownList 
                                    name="Translator"
                                    handleChange={handleInputChange}
                                    stateValue={formValues.translator}
                                    endpoint="authors"
                                    required
                                />
                            </div>
                            <div className="item-details">
                                <label htmlFor="pages">Number of Pages</label>
                                <input
                                    id="pages"
                                    type="number"
                                    name="pages"
                                    onChange={handleInputChange}
                                    value={formValues.pages}
                                    required
                                />
                            </div>
                            <div className="item-details">
                                <label htmlFor="Languages">Languages</label>
                                <DropDownList 
                                    name="Languages"
                                    handleChange={handleInputChange}
                                    stateValue={formValues.languages}
                                    endpoint="languages"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="options-details">
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormProduct;
