"use strict";
import * as dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";
import SleeperApiClient from "./controllers/SleeperApiClient";
import axios from "axios";
import mongoose from './db/mongoose';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Check for required environment variables
if (!process.env.PORT) {
  console.log("PORT", process.env.PORT);
  process.exit(1);
}

// Parse port from environment variables, i.e. convert string to number
const PORT: number = parseInt(process.env.PORT as string, 10);

// Create Express server
const app = express();

// Express configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
mongoose;

// Start Express server
app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

/*
  Method: GET
  Parameters: Username
  Returns: An array of visits related to a user
*/
app.get("/api/user/:username", async (req, res) => {
  const username = req.params.username;
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  await SleeperApiClient.getUser("palet", source.token)
    .then((response) => {
      //handle success
      console.log("success:", response);
      source.cancel;
    })
    .catch((error) => {
      //handle error
      console.log("error:", error);
    });
});
