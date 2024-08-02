const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const user_id = "john_doe_17091999"; // Example user_id
const email = "john@xyz.com"; // Example email
const roll_number = "ABCD123"; // Example roll_number

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.sort().slice(-1);

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});