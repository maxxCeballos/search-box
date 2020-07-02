'use strict'

const express = require('express');
const app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }

app.use(allowCrossDomain);


app.get('/', async (req, res) => {

    let testData = [
        'Symfony 4',
        'Laravel',
        'CakePHP',
        'CodeIgniter',
        'Zend',
        'Phalcon',
        'Yii',
        'FuelPHP',
        'TurboGears',
        'Catalyst',
        'Pylons',
        'Django',
        'Kohana',
        'Angular.js',
        'react',
        'ionic' 
    ];

    let result = await testData.filter( element => element.includes(req.query.consulta) ? element : '')

    res.send(result);

})



app.listen( 3000, () => console.log('Server up'));