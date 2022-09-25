import axios from "axios";
import { useState } from "react";

function FormProduct(props) {
    const initialState = {
        name: "",
        description: "",
        category: "",
        author: "",
        publisher: "",
        translator: "",
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
                                <select
                                    name="category"
                                    onChange={handleInputChange}
                                    value={formValues.category}
                                    id="category"
                                    required
                                >
                                    <option value disabled selected>
                                        Category
                                    </option>
                                    <option value="philosophy">
                                        Philosophy
                                    </option>
                                    <option value="physics">Physics</option>
                                </select>
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Author</label>
                                <select
                                    id="author"
                                    name="author"
                                    onChange={handleInputChange}
                                    value={formValues.author}
                                    required
                                >
                                    <option disabled value selected>
                                        Author
                                    </option>
                                    <option value="Nietschez">Nietschez</option>
                                    <option value="socrates">Socrates</option>
                                </select>
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Publisher</label>
                                <select
                                    id="publisher"
                                    name="publisher"
                                    onChange={handleInputChange}
                                    value={formValues.publisher}
                                    required
                                >
                                    <option value disabled selected>
                                        Publisher
                                    </option>
                                    <option value="lapele">Lapele</option>
                                    <option value="delta">delta</option>
                                </select>
                            </div>
                            <div className="item-details">
                                <label htmlFor="author">Translator</label>
                                <select
                                    id="translator"
                                    name="translator"
                                    onChange={handleInputChange}
                                    value={formValues.translator}
                                    required
                                >
                                    <option value disabled selected>
                                        Translator
                                    </option>
                                    <option>Pascal</option>
                                    <option>Minus</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormProduct;
