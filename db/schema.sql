create database burgers_db;
use burgers_db;
create table burgers(
    id INT primary key auto_increment,
    burger_name VARCHAR(60) not null,
    devoured BOOLEAN default false
);
