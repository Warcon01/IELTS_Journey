const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.post('/submit', (req, res) => {
    const name = req.body['name-form'];
    const surname = req.body['surname-form'];
    const email = req.body['email.form'];

    const data = `Name: ${name}, Surname: ${surname}, Email: ${email}\n`;

    fs.appendFile('formData.txt', data, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.send('Data saved successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});