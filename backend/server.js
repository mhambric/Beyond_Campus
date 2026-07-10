// Imports Express to create the backend server
import express from "express";

// Imports CORS to allow requests from the frontend
import cors from "cors";

// Imports Helmet to add security related HTTP headers
import helmet from "helmet";

// Imports dotenv to load environment variables
import dotenv from "dotenv";

// Loads values from the .env file
dotenv.config();

// Creates the Express application
const app = express();

// Uses the environment port or port 3000 as a backup
const PORT = process.env.PORT || 3000;

// Uses the environment frontend address or the local Vite address
const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5173";

// Adds security related HTTP headers
app.use(helmet());

// Allows the React frontend to send requests to the backend
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

// Allows Express to read JSON sent by the frontend
// The size limit helps prevent unusually large requests
app.use(express.json({ limit: "10kb" }));

// Test route used to confirm that the backend is running
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Beyond Campus backend is running.",
  });
});

// Temporary login route used to test frontend and backend communication
app.post("/api/login", (req, res) => {
  // Gets the login method from the request body
  const { loginMethod } = req.body;

  // Returns an error if no login method was sent
  if (!loginMethod) {
    return res.status(400).json({
      message: "A login method is required.",
    });
  }

  // Returns an error if the login method is not supported
  if (!["phone", "google"].includes(loginMethod)) {
    return res.status(400).json({
      message: "The login method is not supported.",
    });
  }

  // Returns a successful response for a supported login method
  return res.status(200).json({
    message: `${loginMethod} login request received.`,
  });
});

// Handles requests to routes that do not exist
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});

// Handles unexpected backend errors
app.use((error, req, res, next) => {
  // Displays the error in the backend terminal
  console.error(error);

  res.status(500).json({
    message: "An unexpected server error occurred.",
  });
});

// Starts the backend server
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Beyond Campus backend running on port ${PORT}`);
  });
}

export default app;