const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // Ton nom d'utilisateur PostgreSQL
  host: 'localhost',
  database: 'restaurant_db',
  password: 'ton_mot_de_passe', // REMPLACE PAR TON MOT DE PASSE
  port: 5432,
});

module.exports = pool;