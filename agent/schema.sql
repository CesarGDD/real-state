CREATE TABLE agent(
  agent_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  phone SMALLSERIAL NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(200) NOT NULL,
  photo VARCHAR(200) NOT NULL,
  description VARCHAR(1200) NOT NULL
);