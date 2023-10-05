import { serve } from "bun";
import express from "express";

let server: any;

const initServer = (): Promise<void> =>
  new Promise((res) => {
    const app = express(),
      port = 8080;

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    server = app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
      res();
    });
  });

const closeServer = (): Promise<void> => {
  return server?.close();
};

export { initServer, closeServer };
