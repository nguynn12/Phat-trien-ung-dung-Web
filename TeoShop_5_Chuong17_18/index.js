'use strict'

const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000
const expressHandlebars = require('express-handlebars');

// cau hinh public static folder

app.use(express.static(__dirname + "/public"));

// cau hinh de su dung express handlebars, dinh nghia engine

app.engine('hbs', expressHandlebars.engine({

    // thu muc chua cac layout

    layoutsDir: __dirname + '/views/layouts',

    // thu muc chua cac template con

    partialsDir: __dirname + '/views/partials',

    // duoi cua tap tin layout

    extname: '.hbs',

    // tap tin layout chinh la

    defaultLayout: 'main'

}));

// khai bao de su dung engine da dinh nghia

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// routes va render trang index

app.get('/', (req, res) => {

    res.render('index'); // se lay index.hbs do vao {{{ body }}} trong main.hbs

});

// hien thi cac trang con

app.get('/:page', (req, res, next) => {
    const viewName = req.params.page;
    const viewPath = path.join(__dirname, 'views', `${viewName}.hbs`);

    if (!fs.existsSync(viewPath)) {
        return next();
    }

    res.render(viewName);
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

// khoi dong web server

app.listen(port, () => {

    console.log(`SERVER CUA TEO SHOP DANG CHAY TREN CONG ${port}`);
})