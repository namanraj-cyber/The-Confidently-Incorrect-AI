
# Setup Guide – Discord AI Companion

This guide explains how to install, configure, and run the Discord AI Companion Chrome extension locally.

## 1. Requirements

Before starting, make sure you have:

- Google Chrome
- Ollama installed
- An internet connection for downloading the model
- Enough available RAM to run the selected AI model

No Python or Node.js installation is required for this prototype.

## 2. Install Ollama

1. Visit https://ollama.com/
2. Download Ollama for your operating system.
3. Install and launch it.
4. Make sure Ollama is running in the background.

Ollama allows you to run AI models locally on your computer.

## 3. Download the AI Model

Open PowerShell or your terminal and execute:

```bash
ollama pull deepseek-r1:1.5b
```

This downloads the DeepSeek-R1 1.5B model.

To verify that it was installed successfully, run:

```bash
ollama list
```

You should see `deepseek-r1:1.5b` in the list.

## 4. Download the Project

Clone this repository using:

```bash
git clone https://github.com/namanraj-cyber/The-Confidently-Incorrect-AI
```

Alternatively, download the repository as a ZIP file and extract it.

## 5. Load the Chrome Extension

1. Open Google Chrome.
2. Visit:

   `chrome://extensions`

3. Enable Developer mode.
4. Click **Load unpacked**.
5. Select the `extension` folder from the downloaded project.

The Discord AI Companion should now appear in your Chrome extensions.

## 6. Run the Extension

1. Make sure Ollama is running.
2. Open the extension from Chrome's extensions menu.
3. Paste a Discord message into the text box.
4. Click **Explain Message**.
5. Wait for the local AI model to generate a response.

The explanation should appear inside the extension popup.

## 7. Troubleshooting

### Ollama is not responding

- Check whether Ollama is running.
- Verify that the local API is accessible at:

  `http://localhost:11434`

- Restart Ollama if necessary.

### Model not found

Run:

```bash
ollama pull deepseek-r1:1.5b
```

Also check the model name in `extension/popup.js`.

### CORS error

Chrome extensions use a separate origin. Ollama may need to allow requests from your extension.

Configure the `OLLAMA_ORIGINS` environment variable with your extension's origin, then fully restart Ollama.

Avoid allowing unrestricted origins unless you understand the security implications.

### Extension is not loading

- Check that you selected the correct `extension` folder.
- Make sure `manifest.json` is valid JSON.
- Check for errors on the Chrome Extensions page.

## 8. Important Notes

- This project currently requires users to paste messages manually.
- It does not automatically read Discord messages or access Discord accounts.
- It does not summarize an entire Discord channel.
- AI responses may be inaccurate or misleading.
- Do not paste private or sensitive conversations without permission.

## Project Status

This is an experimental prototype. Development is currently paused.

The purpose of this guide is to help others reproduce the current working version and experiment with local language models.
