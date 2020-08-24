create database wunderlist;
use wunderlist;
create table users(
	id int not null auto_increment,
    username varchar(20) not null,
    password varchar(20) not null,
     primary key(id)
);

create table list(
	id int not null auto_increment,
    title varchar(20) not null,
    users_id int not null,
     primary key(id),
    foreign key(users_id) references users(id)
);
create table task(
	id int not null auto_increment,
    title varchar(20) not null,
    status varchar(5) not null,
    list_id int NOT NULL,
    date date,
    duedate date,
    time datetime,
    primary key(id),
    foreign key(list_id) references list(id)
);
create table subtask(
	id int not null auto_increment,
    title varchar(20) not null,
    status varchar(5) not null,
    task_id int not null,
     primary key(id),
    foreign key (task_id) references task(id)
);
create table comment(
	id int not null auto_increment,
    title varchar(20) not null,
     task_id int not null,
     primary key(id),
    foreign key (task_id) references task(id)
);
create table file(
	id int not null auto_increment,
    title varchar(20) not null,
    link varchar(1000) ,
     task_id int not null,
     primary key(id),
    foreign key (task_id) references task(id)
);
create table account_setting(
	id int not null auto_increment,
    username varchar(20) not null,
    password varchar(20) not null,
    language varchar(20) not null,
    dateformat varchar(20) NOT NULL,
    users_id int not null,
     primary key(id),
     foreign key (users_id) references users(id)
);
