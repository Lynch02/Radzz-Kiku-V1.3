const axios = require('axios');

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function getChatGPTResponse(message) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: message,
            max_tokens: 150,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching ChatGPT response:', error.message);
        return 'Maaf, ada masalah dalam memproses permintaan Anda.';
    }
}

// Contoh penggunaan
const userMessage = 'rai';
getChatGPTResponse(userMessage).then(response => {
    console.log('ChatGPT Response:', response);
});
