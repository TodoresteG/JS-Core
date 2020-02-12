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

    function showInfo(ev) {
        const parent = ev.target.parentElement;
        
        if (ev.target.textContent === 'Info') {
            parent.querySelector('.info').style.display = 'block';
            ev.target.textContent = 'Hide Info';
        } else if (ev.target.textContent === 'Hide Info') {
            parent.querySelector('.info').style.display = 'none';
            ev.target.textContent = 'Info';
        }
    }

    const monkeyTemplate = await getTemplateString('monkey');
    Handlebars.registerPartial('monkey', monkeyTemplate);

    const monkeyListFunc = await getTemplateFunc('monkey-list');

    document.querySelector('.monkeys').innerHTML = monkeyListFunc({ monkeys });

    const infoButtons = document.querySelectorAll('.btnInfo');

    [...infoButtons].forEach(button => {
        button.addEventListener('click', showInfo);
    });
}());