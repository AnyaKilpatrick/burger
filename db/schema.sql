create database burgers_db;
use burgers_db;
create table burgers(
    id INT primary key auto_increment not null,
    burger_name VARCHAR(100) not null,
    devoured BOOLEAN default false,
    createdAt TIMESTAMP default current_timestamp;
);
