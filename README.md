# NoteFlow ⚡

NoteFlow is an AI-powered web application designed to simplify complex documents and text into vivid, engaging personas. By leveraging Google's Gemini 2.5 Flash model, NoteFlow transforms standard study notes, PDFs, or text into formats like GenZ Slang, Anime Hype, RPG Quests, or simple ELI5 summaries. 

Built as a single-page application (SPA), it operates entirely in the browser, ensuring user privacy and fast execution.
## Live Site: https://noteflow-1.ai.studio/ 

## 🚀 Features

- **Multi-Format Input:** Paste text directly or drag-and-drop `.pdf`, `.docx`, or `.txt` files to extract text automatically.
- **AI Persona Transformation:** Convert text using 10+ distinct personas, including:
  - ✨ Normal (Clear & Professional)
  - 🔥 GenZ Slang (Main Character Energy)
  - 🤡 Meme (Internet Culture)
  - ⛏️ Minecraft (Blocky Terminology)
  - ⚔️ RPG Quest (Epic Quest Logs)
  - 👨‍🍳 Chef (Recipe Ingredients)
  - ...and more!
- **Local History:** Automatically saves your last 5 simplifications in the browser's `localStorage` so you never lose your work.
- **Privacy-First API Management:** Your Gemini API key is required to use the app but is stored securely in your browser's local storage and never sent to a third-party server.
- **Export Options:** Easily copy the simplified text to your clipboard.
- **Dark Mode UI:** A sleek, modern, professional SaaS-style dark theme with vibrant orange accents.

## 🛠️ Technologies Used

NoteFlow is built entirely with client-side technologies, requiring no backend server.

- **Frontend Core:** HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript
- **AI Integration:** Google Gemini REST API (`gemini-2.5-flash` model)
- **Icons:** Google Material Symbols (Rounded)
- **Fonts:** Google Fonts (Inter)
- **File Parsing (via CDN):** 
  - `pdf.js` (for PDF text extraction)
  - `mammoth.js` (for Word Document text extraction)
  - `marked.js` (for rendering Markdown output)
  - `html2pdf.js` (for PDF exporting)

## ⚙️ Setup and Installation

Since NoteFlow is a static single-page application, setup is incredibly simple.

1. **Clone or Download the Repository:**
   Download the `index.html` file (and any associated CSS/JS if separated, though the core app is designed to run from a single file).
2. **Open in Browser:**
   Simply double-click the `index.html` file to open it in your preferred web browser. No local server is required.
3. **Configure API Key:**
   - Click the "Settings" (gear icon) in the top right corner of the application.
   - Enter your [Google AI Studio Gemini API Key](https://aistudio.google.com/app/apikey).
   - Click "Save Settings". The app is now ready to use!

## 💡 Usage Guide

1. **Input:** Paste your complex text into the text area or drag and drop a supported file.
2. **Select Persona:** Use the dropdown menu to select how you want the text rewritten.
3. **Simplify:** Click the primary action button to process the text.
4. **Review & Export:** View the generated result in the right-hand panel. Use the copy button to save the output. Use the history panel (clock icon) to review past generations.

## 🔒 Security & Privacy

NoteFlow is designed with privacy in mind. 
- **No Backend:** There is no database or backend server.
- **Local Processing:** File parsing (`.pdf`, `.docx`) happens entirely within your browser.
- **API Key Storage:** Your Gemini API key is saved using `localStorage`. It is only used to make direct REST calls to Google's Generative AI servers. 

---
*Disclaimer: NoteFlow uses AI to generate content. Always verify important facts, as AI models can occasionally hallucinate or misinterpret complex data.*
