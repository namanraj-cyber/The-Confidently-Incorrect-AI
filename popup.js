const explainBtn = document.getElementById("explainBtn");
const messageInput = document.getElementById("message");
const result = document.getElementById("result");

explainBtn.addEventListener("click", async () => {
    const message = messageInput.value.trim();

    if (!message) {
        result.textContent = "Please enter a message first.";
        return;
    }

    explainBtn.disabled = true;
    result.textContent = "DeepSeek is thinking...";

    try {
        const response = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek-r1:1.5b",
                messages: [
                    {
                        role: "user",
                        content: `Explain the meaning and tone of this Discord message in simple English:\n\n${message}`
                    }
                ],
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama returned status ${response.status}`);
        }

        const data = await response.json();
        result.textContent = data.message.content;

    } catch (error) {
        result.textContent = "Error: " + error.message;
    } finally {
        explainBtn.disabled = false;
    }
});
