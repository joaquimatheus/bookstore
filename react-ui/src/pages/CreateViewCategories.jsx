import '../styles/management-products.css';

function CreateViewCategories() {
    return (
        <main className='container center'>
            <form className="form-product">
                <h2>Categories</h2>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input id="name" type="text" name="name" required />
                </div>
                <div className="form-group">
                    <label for="name">Description:</label>
                    <textarea id="description" name="description" column="20" rows="10" required></textarea>
                </div>
            </form>
        </main>
    )
}

export default CreateViewCategories
