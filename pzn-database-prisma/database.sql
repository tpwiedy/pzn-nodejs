create table sample (
  id varchar(100) not null,
  name varchar(100) not null,
  primary key (id)
) engine innodb;
SELECT *
FROM sample;
CREATE TABLE customer (
  id VARCHAR(100) not null,
  name VARCHAR(100) not null,
  email VARCHAR(100) not null,
  phone VARCHAR(100) not null,
  primary key(id),
  constraint customers_email_unique unique (email),
  constraint customers_phone_unique unique (phone)
) engine innodb;
SELECT *
FROM customer;
SELECT *
FROM customer
WHERE name = "Asep";
CREATE TABLE product(
  id VARCHAR(100) not null,
  name VARCHAR(100) not null,
  price INT not null,
  stock INT not null,
  category VARCHAR(100) not null,
  primary key (id)
) engine innodb;
SELECT *
FROM product;
INSERT INTO product(id, name, price, stock, category)
VALUES ('P0001', 'A', 1000, 100, 'K1'),
  ('P0002', 'B', 2000, 200, 'K1'),
  ('P0003', 'C', 3000, 300, 'K1'),
  ('P0004', 'D', 4000, 400, 'K2'),
  ('P0005', 'E', 5000, 500, 'K2');
CREATE TABLE categories (
  id INT NOT NULL auto_increment,
  name VARCHAR(100) NOT NULL,
  primary key (id)
) engine innodb;
SELECT *
FROM categories;
CREATE TABLE wallet (
  id VARCHAR(100) not null,
  balance int not null,
  customer_id VARCHAR(100) not null,
  primary key (id),
  constraint wallet_customer_id_fk foreign key (customer_id) references customer (id),
  constraint wallet_customer_id_unique unique (customer_id)
) engine innodb;
SELECT *
FROM wallet;
CREATE TABLE comments(
  id int not null auto_increment,
  customer_id varchar(100) not null,
  title varchar(100) not null,
  description text,
  primary key(id),
  constraint comments_customer_id_fk foreign key (customer_id) references customer (id)
) engine innodb;
SELECT *
from comments;
INSERT INTO comments(customer_id, title, description)
VALUES ('wiedy', 'Comment 1', 'Sample comment 1'),
  ('wiedy', 'Comment 2', 'Sample comment 2'),
  ('asep5', 'Comment 1', 'Sample comment 1'),
  ('asep5', 'Comment 2', 'Sample comment 2');
CREATE TABLE likes(
  customer_id VARCHAR(100) NOT NULL,
  product_id VARCHAR(100) NOT NULL,
  primary key (customer_id, product_id),
  constraint likes_customer_id_fk foreign key (customer_id) references customer(id),
  constraint likes_product_id_fk foreign key (product_id) references product (id)
) engine InnoDb;
SELECT *
FROM likes;
CREATE TABLE _loves(
  A VARCHAR(100) not null,
  B VARCHAR(100) not null,
  primary key(A, B),
  constraint customer_loves_fk foreign key (A) references customer(id),
  constraint product_loves_fk foreign key (B) references product(id)
) engine InnoDb;
CREATE DATABASE belajar_nodejs_prisma;
USE belajar_nodejs_prisma;
show tables;
DESC sample;