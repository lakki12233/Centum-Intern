
const template = $('#template').html();

const data = {
    title: 'Hello world',
};


const templateScript = Handlebars.compile(template);


const renderedHtml = templateScript(data);

console.log(JSON.parse(renderedHtml));
