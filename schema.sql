create database burger_db; 
use burger_db; 

create table burgers (
    id INT AUTO_INCREMENT,
    burger_name varchar(30), 
    devoured  BOOLEAN,
    PRIMARY KEY(id) 
);

INSERT INTO burgers(burger_name, devoured)
VALUES('Double Cheeseburger', false), 
        ('Bacon Burger', false), 
        ('Loaded Topping Burger', false)
        