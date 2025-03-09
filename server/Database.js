import sql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

if (!DB_HOST || !DB_USER || !DB_PASS || !DB_NAME) {
  throw new Error("Missing required environment variables for database connection");
}

const connection = sql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected!");
});

export default connection;
