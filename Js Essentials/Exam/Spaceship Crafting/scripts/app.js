function spaceshipCrafting() {
	let titaniumCoreFound = document.querySelector('#titaniumCoreFound').value;
	let aluminiumCoreFound = document.querySelector('#aluminiumCoreFound').value;
	let magnesiumCoreFound = document.querySelector('#magnesiumCoreFound').value;
	let carbonCoreFound = document.querySelector('#carbonCoreFound').value;
	let lossesPercent = document.querySelector('#lossesPercent').value;

	lossesPercent /= 4;

	titaniumCoreFound -= (titaniumCoreFound * lossesPercent / 100);
	aluminiumCoreFound -= (aluminiumCoreFound * lossesPercent / 100);
	magnesiumCoreFound -= (magnesiumCoreFound * lossesPercent / 100);
	carbonCoreFound -= (carbonCoreFound * lossesPercent / 100);

	let materials = {
		'Titanium': Math.round(titaniumCoreFound / 25),
		'Aluminium': Math.round(aluminiumCoreFound / 50),
		'Magnesium': Math.round(magnesiumCoreFound / 75),
		'Carbon': Math.round(carbonCoreFound / 100)
	};

	let spaceShips = [
		{
			'Model': 'THE-UNDEFINED-SHIP',
			'Count': 0,
			'Titanium': 7,
			'Aluminium': 9,
			'Magnesium': 7,
			'Carbon': 7
		},
		{
			'Model': 'NULL-MASTER',
			'Count': 0,
			'Titanium': 5,
			'Aluminium': 7,
			'Magnesium': 7,
			'Carbon': 5
		},
		{
			'Model': 'JSON-CREW',
			'Count': 0,
			'Titanium': 3,
			'Aluminium': 5,
			'Magnesium': 5,
			'Carbon': 2
		},
		{
			'Model': 'FALSE-FLEET',
			'Count': 0,
			'Titanium': 2,
			'Aluminium': 2,
			'Magnesium': 3,
			'Carbon': 1
		}
	];

	for (let i = 0; i < 1000; i++) {
		if (materials['Titanium'] <= 0 || materials['Aluminium'] <= 0
			|| materials['Magnesium'] <= 0 || materials['Carbon'] <= 0) {
			break;
		}

		for (let ship of spaceShips) {
			if (materials.Titanium - ship.Titanium >= 0
				&& materials.Aluminium - ship.Aluminium >= 0
				&& materials.Magnesium - ship.Magnesium >= 0
				&& materials.Carbon - ship.Carbon >= 0) {

				materials.Titanium -= ship.Titanium;
				materials.Aluminium -= ship.Aluminium;
				materials.Magnesium -= ship.Magnesium;
				materials.Carbon -= ship.Carbon;

				ship.Count += 1;
			}
		}
	}

	let availableBarsP = document.querySelector('#availableBars p');
	let builtSpaceships = document.querySelector('#builtSpaceships p');

	availableBarsP.textContent = `${materials['Titanium']} titanium bars, ${materials['Aluminium']} aluminum bars, ${materials['Magnesium']} magnesium bars, ${materials['Carbon']} carbon bars`;

	let builtSpaceShips = spaceShips.filter(x => x.Count > 0);

	for (let i = 0; i < builtSpaceShips.length; i++) {
		if (i === builtSpaceShips.length - 1) {
			builtSpaceships.textContent += `${builtSpaceShips[i]['Count']} ${builtSpaceShips[i]['Model']}`;
		} else {
			builtSpaceships.textContent += `${builtSpaceShips[i]['Count']} ${builtSpaceShips[i]['Model']}, `;
		}
	}
}