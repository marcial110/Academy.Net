create database ProductsWeb;
use ProductsWeb;

create table Category(
Id int primary key identity(1,1),
Category nvarchar(50),
DescriptionC nvarchar(max),
Active bit,
CreateDateTime DateTime null,
UpdateDateBase DateTime null );

create table Product(
Id int primary key identity(1,1),
CategoryId int,
Name nvarchar(50),
DescriptionP nvarchar(max),
Model nvarchar(50),
Price decimal(18,2),
Keywords nvarchar(50),
Active bit,
CreateDateTime DateTime null,
UpdateDateBase DateTime null,
FOREIGN KEY (CategoryId) REFERENCES Category(Id));

create table ProductImage(
Id int primary key identity(1,1),
ProductId int,
DescriptionPI nvarchar(max),
ImageUrl nvarchar(100),
Active bit,
CreateDateTime DateTime null,
UpdateDateBase DateTime null,
FOREIGN KEY (ProductId) REFERENCES Product(Id));


ALTER TABLE Product
ALTER COLUMN ImageUrl nvarchar(500); 

Alter table Product
add CreateDateTime DateTime null;

Alter table Product
add UpdateDateTime DateTime null;