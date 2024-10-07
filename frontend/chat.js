function sendMessage() {
    const input = document.querySelector('.chat-input input');
    const chatBox = document.querySelector('.chat-box');

    if (input.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = input.value;
        chatBox.appendChild(userMessage);

        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom after sending message
    }
}
