// Demo login route for the deployed Vercel backend.
// This route is used by the login page to test that the React frontend
// can send information to the Express backend and receive a response.
// This is not real authentication yet.
// It does not create accounts, store passwords, or sign users in.

import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Beyond Campus backend is running on Vercel.",
  });
});

app.post("/api/login", (req, res) => {
  const { loginMethod } = req.body;

  if (!loginMethod) {
    return res.status(400).json({
      message: "A login method is required.",
    });
  }

  if (!["phone", "google"].includes(loginMethod)) {
    return res.status(400).json({
      message: "The login method is not supported.",
    });
  }

  return res.status(200).json({
    message: `${loginMethod} demo login request received. Real login is not active yet.`,
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});

export default app;
