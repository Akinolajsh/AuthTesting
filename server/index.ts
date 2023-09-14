import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { db } from "../config/dataBase";

const port: number = 2030;
const app: Application = express();

db()
const server = app.listen(port, () => {
    mainApp(app)
  console.log("");
  console.log("server listening on", port);
});

process.on("uncaughtException", (err) => {
  console.log("server shutting down due to uncaughtexception", err);
  process.exit(1);
});
process.on("unhandlerejection", (reason) => {
  console.log("server shutting down due to unhandlerejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
