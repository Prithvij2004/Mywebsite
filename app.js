const express = require('express')
const morgan = require('morgan')

const port = process.env.PORT || 3000
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('website', { title: 'PJ' });


})

app.listen(port, () => {
    console.log('server running at', port)
})