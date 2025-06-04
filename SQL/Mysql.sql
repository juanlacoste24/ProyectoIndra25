create database proyectoIndra;
use proyectoIndra;


create table usuarios (
    id_usuario int auto_increment primary key,
    nombre varchar(100) not null,
    correo varchar(100) not null unique,
    contrasena varchar(255) not null
);


create table organizadores (
    id_organizador int auto_increment primary key,
    nombre varchar(100) not null,
    contacto varchar(100) not null
);


create table categorias (
    id_categoria int auto_increment primary key,
    nombre varchar(50) not null
);


create table ubicaciones (
    id_ubicacion int auto_increment primary key,
    tipo enum('online', 'presencial') not null,
    direccion varchar(255),
    enlace varchar(255)
);


create table eventos (
    id_evento int auto_increment primary key,
    nombre varchar(100) not null,
    fecha date not null,
    duracion int not null, 
    id_categoria int not null,
    id_ubicacion int not null,
    id_organizador int not null,
    descripcion text,
    foreign key (id_categoria) references categorias(id_categoria),
    foreign key (id_ubicacion) references ubicaciones(id_ubicacion),
    foreign key (id_organizador) references organizadores(id_organizador)
);


create table inscripciones (
    id_inscripcion int auto_increment primary key,
    id_usuario int not null,
    id_evento int not null,
    fecha_inscripcion datetime default current_timestamp,
    unique (id_usuario, id_evento),
    foreign key (id_usuario) references usuarios(id_usuario),
    foreign key (id_evento) references eventos(id_evento)
);
