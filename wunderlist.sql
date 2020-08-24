create database wunderlist;
use wunderlist;
create table tbl_users(
	id_user int not null auto_increment,
    user_name varchar(255) not null,
    password varchar(255) not null,
    create_at timestamp not null,
     primary key(id_user)
);

create table tbl_list(
	id_list int not null auto_increment,
    title_list varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
	id_user int not null,
     primary key(id_list),
    foreign key(id_user) references users(id_user)
);
create table tbl_task(
	id_task int not null auto_increment,
    title_task varchar(255) not null,
    status varchar(255) not null,
    star varchar(255) not null,
    duedate timestamp,
   create_at timestamp not null,
    delete_at timestamp not null,
    id_list int NOT NULL,
    primary key(id_task),
    foreign key(id_list) references list(id_list)
);
create table tbl_subtask(
	id_subtask int not null auto_increment,
    title_subtask varchar(255) not null,
    status varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
    id_task int not null,
     primary key(id_subtask),
    foreign key (id_task) references task(id_task)
);
create table tbl_comment(
	id_comment int not null auto_increment,
    content_comment varchar(255) not null,
    create_at timestamp not null,
    delete_at timestamp not null,
    id_task int not null,
     primary key(id_comment),
   foreign key (id_task) references task(id_task)
);
create table tbl_file(
	id_file int not null auto_increment,
    title_file varchar(255) not null,
    link varchar(255) ,
    create_at timestamp not null,
    delete_at timestamp not null,
     id_task int not null,
     primary key(id_file),
   foreign key (id_task) references task(id_task)
);
create table tbl_account_setting(
	id_account_setting int not null auto_increment,
    language varchar(20) not null,
    dateformat varchar(20) NOT NULL,
    create_at timestamp,
    id_user int not null,
     primary key(id_account_setting),
     foreign key (id_user) references users(id_user)
);
