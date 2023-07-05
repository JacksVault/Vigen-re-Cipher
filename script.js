// Model: Vigenère Cipher logic
const vigenereCipher = {
    encrypt: function (message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let encryptedMessage = "";
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const charCode = message.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                const shift = key.charCodeAt(keyIndex) - 65;
                const encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
                encryptedMessage += String.fromCharCode(encryptedCharCode);
                keyIndex = (keyIndex + 1) % key.length;
            } else {
                encryptedMessage += message.charAt(i);
            }
        }

        return encryptedMessage;
    },

    decrypt: function (encryptedMessage, key) {
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let decryptedMessage = "";
        let keyIndex = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            const charCode = encryptedMessage.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                const shift = key.charCodeAt(keyIndex) - 65;
                const decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
                decryptedMessage += String.fromCharCode(decryptedCharCode);
                keyIndex = (keyIndex + 1) % key.length;
            } else {
                decryptedMessage += encryptedMessage.charAt(i);
            }
        }

        return decryptedMessage;
    },
};

// Controller: Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message');
    const keyInput = document.getElementById('key');
    const encryptedInput = document.getElementById('encrypted');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');

    encryptBtn.addEventListener('click', function () {
        const message = messageInput.value;
        const key = keyInput.value;
        const encryptedMessage = vigenereCipher.encrypt(message, key);
        encryptedInput.value = encryptedMessage;
    });

    decryptBtn.addEventListener('click', function () {
        const encryptedMessage = encryptedInput.value;
        const key = keyInput.value;
        const decryptedMessage = vigenereCipher.decrypt(encryptedMessage, key);
        messageInput.value = decryptedMessage;
    });
});
