function FormCreate(props) {
    return (
        <>
            <form className="form-product">
                <h2>{props.title}</h2>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input id="name" type="text" name="name" required />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        column="20"
                        rows="10"
                        required
                    ></textarea>
                </div>
            </form>
        </>
    );
}

export default FormCreate;
