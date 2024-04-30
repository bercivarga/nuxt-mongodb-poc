import { connect } from "~/server/database";

// Middleware that connects to the database on the server for requests towards the API
export default defineEventHandler(async () => {
  await connect();
});
