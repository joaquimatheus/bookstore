import "../styles/management-products.css";
import { Link } from "react-router-dom";

function ManagementProduct() {
    return (
        <main className="container">
            <h1>Management Product</h1>

            <section className="product-area">
                <div className="datails-product">
                    <h3 className="heading-part">Details of Products</h3>
                    <div className="item-product">
                        <h2>Categories</h2>
                        <Link to="/management/products/categories">
                            Create/View Categories
                        </Link>
                    </div>
                    <div className="item-product">
                        <h2>Authors</h2>
                        <Link to="/management/products/authors">
                            Create/View Authors
                        </Link>
                    </div>
                    <div className="item-product">
                        <h2>Translators</h2>
                        <Link to="/management/products/translators">
                            Create/View Translators
                        </Link>
                    </div>
                    <div className="item-product">
                        <h2>Publishers</h2>
                        <Link to="/management/products/publishers">
                            Create/View Publishers
                        </Link>
                    </div>
                </div>
                <div className="product-create">
                    <h3 className="heading-part">Product itself</h3>
                    <div className="item-product">
                        <h2>Product</h2>
                        <Link to="/management/products/product">
                            Create/View Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ManagementProduct;
