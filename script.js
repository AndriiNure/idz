function mod(n, m) {
    return ((n % m) + m) % m;
}

const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

function getIndex(char) {
    const upperChar = char.toUpperCase();
    return alphabet.indexOf(upperChar);
}

function encrypt(text, key) {
    if (key < 1 || key > 32) {
        alert("Ключ повинен бути в діапазоні від 1 до 32.");
        return "Помилка";
    }

    return Array.from(text)
        .map(char => {
            const isUpperCase = char === char.toUpperCase();
            const index = getIndex(char);
            if (index !== -1) {
                const encryptedIndex = mod(index + key, alphabet.length);
                const encryptedChar = isUpperCase
                    ? alphabet[encryptedIndex]
                    : alphabet[encryptedIndex].toLowerCase();
                return encryptedChar;
            } else {
                return char;
            }
        })
        .join("");
}

function decrypt(text, key) {
    if (key < 1 || key > 32) {
        alert("Ключ повинен бути в діапазоні від 1 до 32.");
        return "Помилка";
    }

    return Array.from(text)
        .map(char => {
            const isUpperCase = char === char.toUpperCase();
            const index = getIndex(char);
            if (index !== -1) {
                const decryptedIndex = mod(index - key, alphabet.length);
                const decryptedChar = isUpperCase
                    ? alphabet[decryptedIndex]
                    : alphabet[decryptedIndex].toLowerCase();
                return decryptedChar;
            } else {
                return char;
            }
        })
        .join("");
}
function encode() {
    const inputText = document.getElementById("encodeInput").value;
    const key = parseInt(document.getElementById("encodeKey").value);
    const outputText = document.getElementById("encodeOutput");

    if (inputText.trim() === "") {
        alert("Будь ласка, введіть текст для шифрування.");
        return;
    }

    outputText.value = encrypt(inputText, key);
}

function decode() {
    const inputText = document.getElementById("decodeInput").value;
    const key = parseInt(document.getElementById("decodeKey").value);
    const outputText = document.getElementById("decodeOutput");

    if (inputText.trim() === "") {
        alert("Будь ласка, введіть текст для дешифрування.");
        return;
    }

    outputText.value = decrypt(inputText, key);
}
