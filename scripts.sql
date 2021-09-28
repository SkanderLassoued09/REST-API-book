-- CREATION book TABLE
CREATE TABLE book (
bookId serial not null ,
bookTitle varchar(250) not null,
bookDesc varchar(1000) not null,
publisher varchar(250) not null ,
author varchar(50) not null,
pages integer not null,
primary key (bookId)
);
-- CREATION store TABLE
CREATE TABLE store (
storeId serial not null ,
storeName varchar(250) not null,
storeAddress varchar(1000) not null,
storeCode varchar(250) not null ,
primary key (storeId)
);