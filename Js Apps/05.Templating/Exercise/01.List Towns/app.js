const elements = {
    townsInput: document.querySelector('#towns'),
    btnLoadTowns: document.querySelector('#btnLoadTowns'),
    rootElement: document.querySelector('#root'),
};

elements.btnLoadTowns.addEventListener('click', loadTowns);

async function loadTowns(ev) {
    ev.preventDefault();

    const townNames = elements.townsInput.value
        .split(', ')
        .filter(x => x !== '')
        .map(x => x.trim());

    const towns = [];

    for (const town of townNames) {
        towns.push({ name: town });
    }

    const townTemplate = await getTemplateString('town');
    Handlebars.registerPartial('town', townTemplate);

    const townListFunc = await getTemplateFunc('town-list');

    elements.rootElement.innerHTML = townListFunc({ towns });
}

async function getTemplateString(name) {
    const path = `./templates/${name}-template.hbs`;
    const response = await fetch(path);
    return response.text();
}

async function getTemplateFunc(name) {
    const templateString = await getTemplateString(name);
    return Handlebars.compile(templateString);
}