export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      MONGO_URI: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
