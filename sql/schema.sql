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

CREATE SEQUENCE seq_authors;
CREATE TABLE authors (
    id INT NOT NULL
        CONSTRAINT pk_authors
        PRIMARY KEY DEFAULT nextval('seq_authors'),

    name TEXT NOT NULL
);
ALTER SEQUENCE seq_authors OWNED BY authors.id;

CREATE SEQUENCE seq_translators;
CREATE TABLE translators (
    id INT NOT NULL
        CONSTRAINT pk_translators
        PRIMARY KEY DEFAULT nextval('seq_translators'),

    name TEXT NOT NULL
);
ALTER SEQUENCE seq_translators OWNED BY translators.id;

CREATE SEQUENCE seq_publishers;
CREATE TABLE publishers (
    id INT NOT NULL
        CONSTRAINT pk_publishers
        PRIMARY KEY DEFAULT nextval('seq_publishers'),

    name TEXT NOT NULL CONSTRAINT uq_categories_name UNIQUE
);
ALTER SEQUENCE seq_publishers OWNED BY publishers.id;

CREATE SEQUENCE seq_categories;
CREATE TABLE categories (
    id INT NOT NULL
        CONSTRAINT pk_categories
        PRIMARY KEY DEFAULT nextval('seq_categories'),

    name TEXT NOT NULL CONSTRAINT uq_catogories_name UNIQUE
);
ALTER SEQUENCE seq_categories OWNED BY categories.id;

CREATE SEQUENCE seq_isbn;
CREATE TABLE ISBN (
    id INT NOT NULL
        CONSTRAINT pk_isbn
        PRIMARY KEY DEFAULT nextval('seq_isbn'),

    isbn13 BIGINT CONSTRAINT uq_isbn13 UNIQUE,

    isbn10 BIGINT CONSTRAINT uq_isbn10 UNIQUE

);
ALTER SEQUENCE seq_isbn OWNED BY ISBN.id;

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

    isbn13 BIGINT
        CONSTRAINT fk_isbn13
        REFERENCES ISBN(isbn13),

    isbn10 BIGINT
        CONSTRAINT fk_isbn10
        REFERENCES ISBN(isbn10)
);
