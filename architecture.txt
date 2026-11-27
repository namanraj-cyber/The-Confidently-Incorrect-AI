
# Project Architecture – Discord AI Companion

## 1. Overview

Discord AI Companion is a Chrome Extension that communicates with a locally running AI model through Ollama.

The extension accepts text manually entered by the user, sends it to the local AI model, and displays the generated explanation.

## 2. Architecture Diagram

```text
       USER
         |
         | Pastes a Discord message
         v
  CHROME EXTENSION
         |
         | popup.html
         | popup.js
         | style.css
         |
         | HTTP POST Request
         v
     OLLAMA API
  localhost:11434
         |
         | Model Processing
         v
  DEEPSEEK-R1:1.5B
         |
         | Generated Response
         v
  CHROME EXTENSION
         |
         v
       USER
```

## 3. Components

### A. Chrome Extension

The extension provides the user interface.

Files:

- `manifest.json` – Defines extension settings and permissions.
- `popup.html` – Contains the user interface.
- `popup.js` – Handles user input and API communication.
- `style.css` – Controls the visual appearance.

### B. Ollama

Ollama runs the language model locally and provides an API through which the extension communicates with it.

API endpoint:

`http://localhost:11434/api/chat`

### C. DeepSeek-R1 1.5B

This is the language model used by the project.

It receives the submitted text and generates an explanation based on the prompt.

## 4. Request Flow

1. The user pastes a message into the extension.
2. JavaScript reads the submitted text.
3. The extension sends an HTTP POST request to Ollama.
4. Ollama passes the request to DeepSeek-R1 1.5B.
5. The model generates a response.
6. Ollama returns the response in JSON format.
7. The extension displays the generated explanation.

## 5. Data and Privacy

- The user manually provides the text.
- The extension communicates with a local Ollama service.
- No Discord login or automatic message collection is implemented.
- The project does not require a cloud AI API key.

## 6. Current Limitations

- No automatic Discord integration.
- No automatic channel-history collection.
- No conversation-wide summarization.
- No persistent conversation memory.
- Model responses may contain factual errors.

## 7. Future Possibilities

Possible improvements include:

- Conversation summarization.
- Better context understanding.
- Reply suggestions.
- Improved handling of slang and internet references.
