function TableProduct(props) {
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
                <tr>
                </tr>
            </tbody>
        </table>
    )
}

export default TableProduct;
