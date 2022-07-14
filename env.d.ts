export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONNECTIONSTRING: string;
      PORT: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
