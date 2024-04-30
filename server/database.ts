import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI;

let connection: mongoose.Connection | null = null;

// Connects to the database by using the DATABASE_URI environment variable
export const connect = async () => {
  if (!DATABASE_URI) {
    throw new Error(
      "DATABASE_URI is not set. Update the environment variables and restart the server.",
    );
  }

  if (mongoose.connection.readyState >= 1 || connection) {
    return;
  }

  console.log("Connecting to database...");

  try {
    const db = await mongoose.connect(DATABASE_URI);
    connection = db.connection;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};

// Disconnects from the database gracefully
export const disconnect = async () => {
  if (mongoose.connection.readyState !== 0 || !connection) {
    console.log("Database is already disconnected");
    return;
  }

  try {
    await connection.close();
    console.log("Disconnected from database");
  } catch (error) {
    console.error("Error disconnecting from database: ", error);
  }

  connection = null;
};

/*
  Handle process termination with graceful disconnect
*/

process.on("SIGINT", async () => {
  await disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await disconnect();
  process.exit(0);
});
