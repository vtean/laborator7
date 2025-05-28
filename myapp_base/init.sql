CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT
);

INSERT INTO products (name, price, description) VALUES
('Laptop', 2069.69, 'High-performance laptop with 32GB RAM'),
('Smartphone', 999.999, 'Latest model with 5G support'),
('Headphones', 420.20, 'Wireless noise-cancelling headphones');