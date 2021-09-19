const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    es.sendFile(__dirname + '/public/index.html');
}); 

app.listen(8080, () => {
    console.log('Start server port:8080');
});