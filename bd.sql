create database zoo;
use zoo;

select * from animais;
select * from trabalhadores;

insert into animais(especie, quantidade,habitate,createdAt,updatedAt) values("Leão","6","Savana",now(),now());
insert into trabalhadores(nome,funcao,createdAt,updatedAt) values("Jorge","faxineiro",now(),now());