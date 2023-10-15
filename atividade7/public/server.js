const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/processar', (req, res) => {
    const camposVazios = [];
    
    for (const key in req.body) {
        if (req.body[key] === '') {
            camposVazios.push(key);
        }
    }

    if (camposVazios.length > 0) {
        return res.status(400).send(`Campos vazios: ${camposVazios.join(', ')}`);
    }

    res.send('Formulário enviado com sucesso!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
