create database wunderlist;
use wunderlist;
create table tbl_user(
	id int not null auto_increment,
    email varchar(255) not null,
    password varchar(255) not null,
    user_name varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
     primary key(id)
);

create table tbl_list(
	id int not null auto_increment,
    title_list varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
	id_user int not null,
     primary key(id),
    foreign key(id_user) references tbl_user(id)
);
create table tbl_task(
	id int not null auto_increment,
    title_task varchar(255) not null,
    status int not null,
    star int not null,
    duedate timestamp,
    note varchar(255),
   create_at timestamp not null,
    delete_at timestamp not null,
    id_list int NOT NULL,
    primary key(id),
    foreign key(id_list) references tbl_list(id)
);
create table tbl_subtask(
	id int not null auto_increment,
    title_subtask varchar(255) not null,
    status int not null,
    create_at timestamp not null,
    delete_at timestamp not null,
    id_task int not null,
     primary key(id),
    foreign key (id_task) references tbl_task(id)
);
create table tbl_comment(
	id int not null auto_increment,
    content_comment varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
    id_task int not null,
     primary key(id),
   foreign key (id_task) references tbl_task(id)
);
create table tbl_file(
	id int not null auto_increment,
    title_file varchar(255) not null,
    link varchar(255) ,
    create_at timestamp not null,
    delete_at timestamp not null,
     id_task int not null,
     primary key(id),
   foreign key (id_task) references tbl_task(id)
);
create table tbl_account_setting(
	id int not null auto_increment,
    language varchar(20) not null,
    dateformat varchar(20) NOT NULL,
    create_at timestamp,
    id_user int not null,
     primary key(id),
     foreign key (id_user) references tbl_user(id)
);
