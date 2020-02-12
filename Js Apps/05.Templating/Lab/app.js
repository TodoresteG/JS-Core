(async function () {
    const getTemplateString = async function (name) {
        const path = `./templates/${name}-template.hbs`;
        const response = await fetch(path);
        return response.text();
    }

    const getTemplateFunc = async function (name) {
        const templateString = await getTemplateString(name);
        return Handlebars.compile(templateString);
    };

    const displayInfo = function(ev) {
        const card = ev.target.closest('.contact');
        const detailsDiv = card.querySelector('.details');

        if (ev.target.textContent === 'Details') {
            detailsDiv.style.display = 'block';
            ev.target.textContent = 'Hide';
        } else if (ev.target.textContent === 'Hide') {
            detailsDiv.style.display = 'none';
            ev.target.textContent = 'Details';
        }
    };

    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = await getTemplateFunc('card-list');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });

    const buttons = document.getElementsByTagName('button');

    [...buttons].forEach(x => {
        x.addEventListener('click', displayInfo)
    })
}());