import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    // Replace 'your-database-name' with your actual database name
    const dbName = "ticketing";
    const mongoHost = "auth-mongo-db-clusterip-srv"; // This should match the service name in your Kubernetes cluster

    const dbUsername = process.env.MONGO_INITDB_ROOT_USERNAME;
    const dbPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
    // const connectionString = `mongodb://${dbUsername}:${dbPassword}@${mongoHost}:27017/${dbName}`;
    const connectionString = `mongodb://${mongoHost}:27017/`;

    console.log({connectionString});
    
    await mongoose.connect(connectionString);

    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
