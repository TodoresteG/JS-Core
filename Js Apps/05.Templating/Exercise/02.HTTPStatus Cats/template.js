(async function() {
    async function getTemplateString(name) {
        const path = `./templates/${name}-template.hbs`;
        const response = await fetch(path);
        return response.text();
    }
    
    async function getTemplateFunc(name) {
        const templateString = await getTemplateString(name);
        return Handlebars.compile(templateString);
    }

    function showStatusCode(ev) {
        const parent = ev.target.parentElement;

        if (ev.target.textContent === 'Show status code') {
            parent.querySelector('.status').style.display = 'block';
            ev.target.textContent = 'Hide status code';
        } else if (ev.target.textContent === 'Hide status code') {
            parent.querySelector('.status').style.display = 'none';
            ev.target.textContent = 'Show status code';
        }
    }
    
    const catTemplate = await getTemplateString('cat');
    Handlebars.registerPartial('cat', catTemplate);
    
    const catListFunc = await getTemplateFunc('cat-list');
    
    document.querySelector('#allCats').innerHTML = catListFunc({ cats });

    const showBtn = document.querySelectorAll('.showBtn');
    
    [...showBtn].forEach(button => {
        button.addEventListener('click', showStatusCode);
    });
}());
