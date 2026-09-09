async function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show user message
    chatBox.innerHTML += `
        <div class="message user">
            ${message}
        </div>
    `;

    // Clear input
    input.value = "";

    // Show loading message
    chatBox.innerHTML += `
        <div class="message bot" id="loading">
            Thinking... 🤔
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        // Remove loading
        const loading = document.getElementById("loading");

        if (loading) {
            loading.remove();
        }

        // Show bot response
        chatBox.innerHTML += `
            <div class="message bot">
                ${formatResponse(data.reply)}
            </div>
        `;

    } catch (error) {

        const loading = document.getElementById("loading");

        if (loading) {
            loading.innerHTML =
                "Sorry! Something went wrong. Please try again. 😕";
        }

        console.error(error);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Format chatbot response
function formatResponse(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
}


// Press Enter to send
function handleKey(event) {

    if (event.key === "Enter") {
        sendMessage();
    }
}