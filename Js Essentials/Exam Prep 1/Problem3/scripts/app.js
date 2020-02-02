function getData() {
	function findPerson(list, name) {
		return list.find(x => x.firstName === name.firstName
			&& x.lastName === name.lastName);
	}

	function personOut(peopleIn, currentName, peopleOut) {
		if (findPerson(peopleIn, currentName)) {
			let indexOfPerson = peopleIn.findIndex(x => x.firstName === currentName.firstName
				&& x.lastName === currentName.lastName);

			let personOut = peopleIn.splice(indexOfPerson, 1)[0];
			peopleOut.push(personOut);
		}
	}

	let peopleFromTextArea = JSON.parse(document.querySelector('#input textarea').textContent);
	let sortingCriteria = peopleFromTextArea.pop();

	let pplInP = document.querySelector('#peopleIn p');
	let pplOutP = document.querySelector('#peopleOut p');
	let blacklistP = document.querySelector('#blacklist p');

	let peopleIn = [];
	let peopleOut = [];
	let blacklist = [];

	for (let person of peopleFromTextArea) {
		let action = person.action;
		let currentName = {
			'firstName': person.firstName,
			'lastName': person.lastName
		}

		if (action === 'peopleIn') {
			if (!findPerson(blacklist, currentName)) {
				peopleIn.push(currentName);
			}
		} else if (action === 'peopleOut') {
			personOut(peopleIn, currentName, peopleOut);
		} else if (action === 'blacklist') {
			personOut(peopleIn, currentName, peopleOut);
			blacklist.push(currentName);
		}
	}

	let output = {};
		output['peopleIn'] = peopleIn;
		output['peopleOut'] = peopleOut;
		output['blacklist'] = blacklist;

	if (sortingCriteria.criteria !== '' && sortingCriteria.action !== '') {
		let criteria = sortingCriteria.criteria;
		let action = sortingCriteria.action;

		output[action] = output[action].sort((a, b) => {
			a[criteria].localeCompare(b[criteria]);
		});
	}

	pplInP.textContent = output.peopleIn.map(x => JSON.stringify(x)).join(' ');
	pplOutP.textContent = output.peopleOut.map(x => JSON.stringify(x)).join(' ');
	blacklistP.textContent = output.blacklist.map(x => JSON.stringify(x)).join(' ');
}