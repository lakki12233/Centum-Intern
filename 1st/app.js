const fs = require('fs');
const Handlebars = require('handlebars');


const templateSource = fs.readFileSync('index.hbs', 'utf8');

// Compile the template
const template = Handlebars.compile(templateSource);

// Data to pass into the template
const data = {
    title: 'Handlebars Example',
    message: 'Welcome Suman!'
};

// Render the template with the data
const renderedHtml = template(data);

// Write the rendered HTML to a new file
fs.writeFileSync('index.html', renderedHtml, 'utf8');

console.log('Template compiled successfully!');
