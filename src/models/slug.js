import db from '../utils/db';
import { slugQueries } from '../queries/';

// Helpers
function transform(slug) {
  const modifiedSlug = {
    ...slug,
    createdAt: slug.created_at,
  };

  delete modifiedSlug.created_at;

  return modifiedSlug;
}

// Controllers
async function findById(id) {
  const query = slugQueries.findById();
  const values = [id];
  const result = await db.query(query, values);

  if (result.rows.length < 1) {
    return false;
  } else {
    const record = transform(result.rows[0]);
    return record;
  }
}

async function create(data) {
  const query = slugQueries.create();
  const values = [data.url];
  const result = await db.query(query, values);
  const record = result.rows[0];
  return record;
}

export { create, findById };
