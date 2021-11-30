const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const viewPath = path.join(__dirname, '/templates/views');
const partialsPath = path.join(__dirname, '/templates/partials');

// Seteo de los handlebars, y lo ubicacion de views
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname, '/public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Marcos'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Marcos'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help!',
        name: 'Marcos'
    });
});

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Marcos'
//     },{
//         name: 'Florencia'
//     }])
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About!</h1>');
// });

app.get('/weather', (req, res) => {
    res.send('Your weather');
});

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: 'Error',
        errorMessage: 'No se encontro el articulo de ayuda',
        name: 'Marcos'
    });
});

// Se debe llamar al final
app.get('*', (req, res) => {
    res.render('404',{
        title: 'Error',
        errorMessage: 'Error 404, no se encontro la pagina',
        name: 'Marcos'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});