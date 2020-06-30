'use strict'

const express = require('express');
const app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }

app.use(allowCrossDomain);


app.get('/', (req, res) => {
    
    let testData = [
        'github.com/Reactive-Extensions/RxJS',
        'github.com/ReactiveX/RxJS',
        'xgrommx.github.io/rx-book',
        'reactivex.io',
        'egghead.io/technologies/rx',
        'rxmarbles.com',
        'https://www.manning.com/books/rxjs-in-action'
    ];

    res.send(testData);

})



app.listen( 3000, () => console.log('Server up'));