import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Endpoint to check server Gemini API key configuration
  app.get("/api/config", (req, res) => {
    const hasServerKey = !!process.env.GEMINI_API_KEY;
    res.json({ hasServerKey });
  });

  // Endpoint to process simplification using Gemini API
  app.post("/api/simplify", async (req, res) => {
    try {
      const { text, systemInstruction, apiKey } = req.body;
      
      // Use custom user key from client if provided, otherwise fallback to server GEMINI_API_KEY
      const keyToUse = apiKey || process.env.GEMINI_API_KEY;

      if (!keyToUse) {
        return res.status(400).json({
          error: {
            message: "No Gemini API Key found. Please configure your API key in Settings or set GEMINI_API_KEY in environment secrets."
          }
        });
      }

      if (!text || typeof text !== "string") {
        return res.status(400).json({
          error: { message: "Input text is required." }
        });
      }

      const ai = new GoogleGenAI({ apiKey: keyToUse });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: text,
        config: {
          systemInstruction: systemInstruction || "Simplify the provided text clearly.",
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API server error:", error);
      res.status(500).json({
        error: {
          message: error?.message || "Failed to generate response with Gemini API."
        }
      });
    }
  });

  // Vite middleware for development or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
