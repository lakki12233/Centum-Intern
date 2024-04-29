const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('hbs', engine({
  defaultLayout: 'index',
  layoutsDir: `${__dirname}/views/layouts/para1`,
  extname: 'hbs',
  defaultLayout: 'index',
  //partialsDir: `${__dirname}/views/layouts/para1`
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

const fakeApi = () => {
    return[
        {
            name: 'Dhoni',
            role: 'toplaner'
        },
        {
             name: 'Kholi',
             role: 'midlaner'
        },
        {
            name: 'Bumrah',
            role: 'toplaner'
        }
    ]
}

const list = true;

app.get('/', (req, res) => {
 // res.render('main', {layout: 'index', proplayer: fakeApi(), listExists: list});
 res.render('main', {layout: 'demo'});
});

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
