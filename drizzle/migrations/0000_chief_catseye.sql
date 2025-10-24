-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "users" (
	"Name" varchar(255) NOT NULL,
	"Email" varchar(255) NOT NULL,
	"Department" varchar(255) NOT NULL,
	"Designation" varchar(255) NOT NULL,
	"Status" varchar(50) DEFAULT 'active' NOT NULL,
	"Id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	CONSTRAINT "users_email_unique" UNIQUE("Email")
);

*/