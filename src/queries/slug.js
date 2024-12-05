const TABLE_NAME = 'slug';

const createTable = () => `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );
`;
const findById = () => `
    SELECT *
    FROM ${TABLE_NAME}
    WHERE id = ($1)
    LIMIT 1
`;

const create = () => `
  INSERT INTO ${TABLE_NAME} (url)
  VALUES ($1)
  RETURNING *;
`;

export { createTable, findById, create };
