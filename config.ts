import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  PORT: process.env.PORT || 3001, // express port
  connectionString:
    process.env.ENV === "prod"
      ? process.env.CONNECTIONSTRING
      : "postgresql+psycopg2://postgres:kthxbai1337@localhost:5432/postgres",
  database: {
    table: "employees",
  },
};
