// SQL queries
const getHeroes = "SELECT * FROM heroes";
const createHero =
  "INSERT INTO heroes (name, class, level, created_at) VALUES ($1, $2, $3, $4)";
const updateHero = "UPDATE heroes SET classes = $1 WHERE id = $2";
const deleteHero = "DELETE FROM heroes WHERE heroes.id = $1";
const getHeroById = "SELECT * FROM heroes WHERE heroes.id = $1";

const checkNameExists = "SELECT s FROM heroes s WHERE s.name = $1";

export default {
  getHeroes,
  createHero,
  updateHero,
  deleteHero,
  getHeroById,
  checkNameExists,
};
