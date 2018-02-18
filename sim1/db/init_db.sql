CREATE TABLE bins (
    bin_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(50),
    price int DEFAULT 0,
    image varchar(255)
)