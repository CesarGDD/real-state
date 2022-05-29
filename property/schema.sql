CREATE TABLE property(
  property_id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR(200) NOT NULL,
  status VARCHAR(30) NOT NULL,
  rooms SMALLSERIAL NOT NULL,
  toilets SMALLSERIAL NOT NULL,
  park SMALLSERIAL NOT NULL,
  size SERIAL NOT NULL,
  description VARCHAR(1200) NOT NULL,
  features VARCHAR(1200) NOT NULL,
  agent_id SERIAL NOT NULL
);