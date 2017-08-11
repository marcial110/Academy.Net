create database ProductsWeb;
use ProductsWeb;

create table Category(
Id int primary key identity(1,1),
Category nvarchar(50),
DescriptionC nvarchar(max),
Active bit);

create table Product(
Id int primary key identity(1,1),
CategoryId int,
Name nvarchar(50),
DescriptionP nvarchar(max),
Model nvarchar(50),
Price decimal(18,2),
Keywords nvarchar(50),
Active bit
FOREIGN KEY (CategoryId) REFERENCES Category(Id));

create table ProductImage(
Id int primary key identity(1,1),
ProductId int,
DescriptionPI nvarchar(max),
ImageUrl nvarchar(100),
Active bit
FOREIGN KEY (ProductId) REFERENCES Product(Id));


ALTER TABLE ProductImage
ALTER COLUMN ImageUrl nvarchar(500); 