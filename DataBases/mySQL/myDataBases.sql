show databases;
create database liteSql;
show tables;
create table costomerDetails(Name varchar(20), Age int, Roles varchar(5), Sex varchar(1), City varchar(20), Salary float, CustomerId int);
create table myDatabases.employeeDetails(Name varchar(20), Age int, Roles varchar(10), Sex varchar(1), City varchar(20), Salary float, CustomerId int primary key);
-- It's safe to increase the size of your varchar column. You won't corrupt your data.
alter table customerDetails modify Roles varchar(100);
select * from myDataBases.employeeDetails;
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("Ram", 29, "test", "f", "Banglore", 12000, 12344321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("sunny", 25, "software engineer", "m", "mubai", 120675, 1234985621);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("shubham", 28, "engineer", "x", "usa", 12334400, 107654321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("kundan", 20, "watering", "f", "kolkatta", 866000, 19644321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("vanishree", 25, "data analysis", "m", "Banglore", 1200000, 1266321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("aishwarya", 22, "cctv", "f", "karnak", 1098600, 12984321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("Mukesh", 23, "tea", "f", "delhi", 120600, 12878321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("Lakshaman", 28, "making", "f", "lore", 126000, 12744321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("suraj", 28, "making", "f", "lore", 126000, 12744321);
insert into myDataBases.customerDetails(name, age, roles, sex, city, salary, customerid) values ("suraj", 22, "sde", "m", "bihar", 126000, 124321);
select * from myDataBases.customerDetails;
-- To create a PRIMARY KEY constraint on the "ID" column when the table is already created, use the following SQL:
alter table customerDetails add primary key (CustomerId);
-- To drop a PRIMARY KEY constraint, use the following SQL:
alter table customerDetails drop primary key;

select*from customerDetails;
describe customerDetails.City;
-- The DROP TABLE statement is used to drop an existing table in a database.
drop table employeeDetails;
-- The TRUNCATE TABLE statement is used to delete the data inside a table, but not the table itself.
truncate table employeeDetails;
show tables;
select * from myDataBases.customerDetails;

describe customerDetails;

select distinct City from customerDetails;
select count(name) as count_name from customerDetails;
select sum(salary) as sum_of_salary from customerDetails;
select avg(salary) as avarage_of_solary from customerDetails;
select avg(salary) as avarage_of_salary from customerDetails;

select name, age, city from customerDetails;
select * from customerDetails where Age > 20;
select name, city, sex from customerDetails where sex = 'f';

select * from customerDetails where city = "delhi" or city = "lore";
-- alternate of above 
select * from customerDetails where city in ("bengalore", 'delhi');

select * from customerDetails where name in ("suraj", "aishwarya");
-- Need to get the list of customer sorted in the alphabetical order of asc/desc
select name from customerDetails order by  name asc;
select * from customerDetails order by name;

select * from customerDetails order by age ;

select * from customerDetails order by name asc;

select * from customerDetails order by city, age;

select * from customerDetails order by name asc, city desc;

select count(*) as total_count from customerDetails;


