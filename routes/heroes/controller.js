import pool from "../../database/db.js";
import queries from "./queries.js";

//----- BASICS ----- \\

const getHeroes = (req, res) => {
  pool.query(queries.getHeroes, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

const createHero = (req, res) => {
  const { name, classes, level } = req.body;

  // Check if name taken
  pool.query(queries.checkNameExists, [name], (error, results) => {
    if (results.rows.length) {
      // If returns an array of one row, username exists:
      res.send("Hero already exists");
    }

    // Add Hero to db
    pool.query(
      queries.createHero,
      [name, classes, level, new Date()],
      (error, results) => {
        if (error) throw error;

        res.status(201).send("Hero created successfully!");
      }
    );
  });
};

//----- REQUIRES ID ----- \\

const getHeroById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getHeroById, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

const updateHero = (req, res) => {
  const id = parseInt(req.params.id);

  const { classes } = req.body;

  pool.query(queries.getHeroById, [id], (error, results) => {
    const heroDoesntExists = !results.rows.length;

    if (heroDoesntExists) {
      res.status(404).send("This hero doesn't exist.");
    }

    pool.query(queries.updateHero, [classes, id], (error, results) => {
      if (error) throw error;

      res.status(200).send("Hero updated successfully!");
    });
  });
};

const deleteHero = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getHeroById, [id], (error, results) => {
    const heroDoesntExists = !results.rows.length;

    if (heroDoesntExists) {
      res.status(404).send("This hero doesn't exist.");
    }

    pool.query(queries.deleteHero, [id], (error, results) => {
      if (error) throw error;

      res.status(200).send("Hero delete!");
    });
  });
};

export default {
  getHeroes,
  createHero,
  updateHero,
  deleteHero,
  getHeroById,
};
