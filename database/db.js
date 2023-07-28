import pg from "pg";
const { Pool } = pg;

const localPoolConfig = {
  user: "mathieu",
  host: "localhost",
  database: "heroes",
  password: "5654",
  port: "5432",
};

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorize: false },
    }
  : localPoolConfig;

const pool = new Pool(poolConfig);

export default pool;
