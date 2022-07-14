import pg, { Pool } from "pg";
import { CONFIG } from "./config";

export interface IQueryCallback {
  (result: any[] | string, success: boolean): void;
}

const pgConfig: pg.PoolConfig = {
  connectionString: CONFIG.connectionString,
  query_timeout: 1000,
  ssl:
    process.env.ENV === "prod"
      ? {
          rejectUnauthorized: false,
        }
      : false,
};

const pool = new Pool({
  connectionString: pgConfig.connectionString,
  ssl: pgConfig.ssl,
});

export const query = async (
  query: string,
  params?: any,
  callback?: IQueryCallback
) => {
  console.log("Getting client from pool..");
  const client = await pool.connect();
  try {
    const res = await client.query(query, params);
    if (callback) callback(res.rows, true);
    // console.log(res);
  } catch (e: any) {
    if (callback) callback(e, false);
    console.log(`💀 ${e}`);
  } finally {
    client.release();
    console.log("client release from pool");
  }
};
