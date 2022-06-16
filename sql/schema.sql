-- DOCS 

-- pk === PRIMARY KEY
-- uq === UQ
-- fk === FK
-- df === DEFAULT KEY
-- seq_nomedatabela === SEQUENCE

-- products
-- order_products
-- publishers
-- translators
-- categores
-- authors
-- products_images
-- product_stock
-- order_products
-- order_id
-- product_id
-- product_stock_id
-- orders
-- order_payments
-- custormers
-- (CREATE EXTENSION "uuid-ossp";)

CREATE SEQUENCE seq_authors;
CREATE TABLE authors (
    id INT NOT NULL
        CONSTRAINT pk_authors
        PRIMARY KEY DEFAULT nextval('seq_authors'),

    name TEXT NOT NULL,

    description TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_authors_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_authors OWNED BY authors.id;

CREATE SEQUENCE seq_translators;
CREATE TABLE translators (
    id INT NOT NULL
        CONSTRAINT pk_translators
        PRIMARY KEY DEFAULT nextval('seq_translators'),

    name TEXT NOT NULL,

    description TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_translators_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_translators OWNED BY translators.id;

CREATE SEQUENCE seq_publishers;
CREATE TABLE publishers (
    id INT NOT NULL
        CONSTRAINT pk_publishers
        PRIMARY KEY DEFAULT nextval('seq_publishers'),

    name TEXT NOT NULL CONSTRAINT uq_categories_name UNIQUE,

    description TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_publishers_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_publishers OWNED BY publishers.id;

CREATE SEQUENCE seq_categories;
CREATE TABLE categories (
    id INT NOT NULL
        CONSTRAINT pk_categories
        PRIMARY KEY DEFAULT nextval('seq_categories'),

    name TEXT NOT NULL CONSTRAINT uq_catogories_name UNIQUE,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_categories_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_categories OWNED BY categories.id;

CREATE SEQUENCE seq_products;
CREATE TABLE products (
    id INT NOT NULL
        CONSTRAINT pk_products
        PRIMARY KEY DEFAULT NEXTVAL('seq_products'),

    name TEXT NOT NULL,

    category_id INT NOT NULL
        CONSTRAINT fk_category
        REFERENCES categories(id),

    author_id INT NOT NULL
        CONSTRAINT fk_author
        REFERENCES authors(id),

    translator_id INT
        CONSTRAINT fk_translator
        REFERENCES translators(id),

    publisher_id INT NOT NULL
        CONSTRAINT fk_publisher
        REFERENCES publishers(id),

    description TEXT NOT NULL,

    content TEXT NOT NULL,

    language TEXT NOT NULL,

    pages INT NOT NULL,

    price NUMERIC NOT NULL,

    link TEXT CONSTRAINT uq_link UNIQUE,

    isbn13 BIGINT CONSTRAINT uq_isbn13 UNIQUE,

    isbn10 BIGINT CONSTRAINT uq_isbn10 UNIQUE,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_products_utc_created_on DEFAULT(now())
);

CREATE SEQUENCE seq_product_stock;
CREATE TABLE product_stock (
    id INT NOT NULL
        CONSTRAINT pk_products_stock
        PRIMARY KEY DEFAULT NEXTVAL('seq_product_stock'),

    code TEXT NOT NULL CONSTRAINT uq_code UNIQUE,

    product_id INT NOT NULL
        CONSTRAINT fk_product_id
        REFERENCES products(id),

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_products_stock_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_product_stock OWNED BY product_stock.id;

CREATE SEQUENCE seq_customers;
CREATE TABLE customers (
    id INT NOT NULL
        CONSTRAINT pk_customers_id
        PRIMARY KEY DEFAULT NEXTVAL('seq_customers'),

    addresss TEXT NOT NULL,

    address2 TEXT,

    district TEXT NOT NULL,

    city TEXT NOT NULL,

    postal_code TEXT NOT NULL,

    phone TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_customers_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_customers OWNED BY customers.id;

CREATE TABLE orders (
    id uuid DEFAULT gen_random_uuid()
        CONSTRAINT pk_orders
        PRIMARY KEY,

    customer_id INT NOT NULL
        CONSTRAINT fk_customer_id
        REFERENCES customers(id),

    address TEXT NOT NULL,

    address2 TEXT,

    district TEXT NOT NULL,

    city TEXT NOT NULL,

    postal_code TEXT NOT NULL,

    phone TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_orders_utc_created_on DEFAULT(now())
);

CREATE SEQUENCE seq_order_payments;
CREATE TABLE order_payments (
    id INT NOT NULL
        CONSTRAINT pk_order_payments
        PRIMARY KEY DEFAULT NEXTVAL('seq_order_payments'),

    order_id INT NOT NULL
        CONSTRAINT fk_order_id
        REFERENCES orders(id),

    status TEXT NOT NULL,

    payment_method TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_orders_payments_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_order_payments OWNED by order_payments.id;

CREATE SEQUENCE seq_order_products;
CREATE TABLE order_products (
    id INT NOT NULL
        CONSTRAINT pk_order_products
        PRIMARY KEY DEFAULT NEXTVAL('seq_order_products'),

    product_id INT NOT NULL
        CONSTRAINT fk_product_id
        REFERENCES products(id),

    product_stock_id INT NOT NULL
        CONSTRAINT fk_product_stock_id
        REFERENCES product_stock(id),

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_orders_products_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_order_products OWNED by order_products.id;

CREATE SEQUENCE seq_product_images;
CREATE TABLE product_images (
    id INT NOT NULL
        CONSTRAINT pk_product_images
        PRIMARY KEY DEFAULT NEXTVAL('seq_product_images'),

    product_id INT NOT NULL
        CONSTRAINT fk_product_id
        REFERENCES products(id),

    img_url_path TEXT NOT NULL,

    utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_products_images_utc_created_on DEFAULT(now())
);
ALTER SEQUENCE seq_product_images OWNED by product_images.id
