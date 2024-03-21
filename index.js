const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
    readFile('./index.html', 'utf8', (err, html) => {

        if (err) {
            res.status(500).send('sorry, out of order');
        };

       res.send(html);

    }
    )
}
)

app.listen(3000, () => {
    console.log('listening on port 3000');
    console.log('http://localhost:3000');
});