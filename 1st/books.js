const fs = require('fs');
const Handlebars = require('handlebars');

// Array of books
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' }
];

// Read the Handlebars template file
const templateSource = fs.readFileSync('index.hbs', 'utf8');

// Compile the template
const template = Handlebars.compile(templateSource);

// Data to pass into the template
const data = {
    booksList: books
};

// Render the template with the data
const renderedHtml = template(data);

// Write the rendered HTML to a new file
fs.writeFileSync('books.html', renderedHtml, 'utf8');

console.log('Books template compiled successfully!');
