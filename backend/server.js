const express = require('express');
const cors = require('cors');
const math = require('mathjs');
const app = express(),
    bodyParser = require('body-parser');
port = 80;

app.use(bodyParser.json());
app.use(
    cors({
        origin: '*'
    })
);

app.post('/api/calculate', (request, response) => {
    let expression = request.body.expression;
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    //operations replace
    expression = expression.replace(/×/g, '*');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/√/g, 'sqrt');

    //functions replace
    expression = expression.replace(/sin<sup>-1<\/sup>/g, 'asin');
    expression = expression.replace(/cos<sup>-1<\/sup>/g, 'acos');
    expression = expression.replace(/tan<sup>-1<\/sup>/g, 'atan');
    expression = expression.replace(/log/g, 'log10');
    expression = expression.replace(/ln/g, 'log');
    expression = expression.replace(/<sup>/g, '^');
    expression = expression.replace(/<\/sup>/g, '');

    //tag remove
    expression = expression.replace(/<span style="color: #C4CDD5">/, '');
    expression = expression.replace(/<\/span>/, '');

    //constant replace
    expression = expression.replace(/π/g, 'pi*1');
    expression = expression.replace(/e/g, 'e*1');
    expression = expression.replace(/E/g, 'E0');

    response.json({ answer: math.evaluate(expression) });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
