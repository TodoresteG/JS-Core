const kinveyUser = 'guest';
const kinveyPass = 'pass';
const appKey = 'kid_BJ_Ke8hZg';

const elements = {
    venueDateInput: document.querySelector('#venueDate'),
    getVenuesBtn: document.querySelector('#getVenues'),
    venueInfo: document.querySelector('#venue-info')
};

elements.getVenuesBtn.addEventListener('click', getAvailableIds);

function getAvailableIds(ev) {
    const date = elements.venueDateInput.value;

    const postUrl = `https://baas.kinvey.com/rpc/${appKey}/custom/calendar?query=${date}`;
    const headers = {
        method: 'POST',
        credentials: 'include',
        Authorization: 'Basic ' + btoa(`${kinveyUser}:${kinveyPass}`),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(postUrl, headers)
    .then(handler)
    .then(getAvailableVenues);
}

function getAvailableVenues(data) {
    for(const venue of data) {
        const getUrl = `https://baas.kinvey.com/appdata/${appKey}/venues/${venue}`;
        const headers = {
            credentials: 'include',
            Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(getUrl, headers)
        .then(handler)
        .then(displayAvailableVenue)
    }

}

function displayAvailableVenue(data) {
    const venueDiv = document.createElement('div');
    venueDiv.className = 'venue';
    venueDiv.id = data._id;

    venueDiv.innerHTML = `<span class="venue-name">${data.name}<input class="info" type="button" value="More info"></span>
    <div class="venue-details" style="display: none;">
        <table>
            <tr>
                <th>Ticket Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            <tr>
                <td class="venue-price">${data.price} lv</td>
                <td><select class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></td>
                <td><input class="purchase" type="button" value="Purchase"></td>
            </tr>
        </table>
        <span class="head">Venue description:</span>
        <p class="description">${data.description}</p>
        <p class="description">Starting time: ${data.startingHour}</p>
    </div>`;

    const moreInfoBtn = venueDiv.querySelector('.info');
    
    moreInfoBtn.addEventListener('click', showMoreInfo);

    elements.venueInfo.appendChild(venueDiv);
}

function showMoreInfo(ev) {
    const venue = ev.target.parentElement.parentElement;
    const btnValue = ev.target.value;

    const purchaseBtn = venue.querySelector('.purchase');
    purchaseBtn.addEventListener('click', displayConfirmationPage);

    if(btnValue === 'More info') {
        venue.querySelector('.venue-details').style.display = 'block';
        ev.target.value = 'Hide info';
    } else if (btnValue === 'Hide info') {
        venue.querySelector('.venue-details').style.display = 'none';
        ev.target.value = 'More info';
    }
}

function displayConfirmationPage(ev) {
    const venue = ev.target.closest('div.venue');

    const name = venue.querySelector('.venue-name').textContent;
    const price = parseInt(venue.querySelector('.venue-price').textContent);
    const qty = parseInt(venue.querySelector('.quantity').value);

    elements.venueInfo.innerHTML = `<span class="head">Confirm purchase</span>
    <div class="purchase-info">
        <span>${name}</span>
        <span>${qty} x ${price}</span>
        <span>Total: ${qty * price} lv</span>
        <input type="button" value="Confirm">
    </div>`;

    const confirmBtn = elements.venueInfo.querySelector('input');
    confirmBtn.id = venue.id;
    confirmBtn.setAttribute('qty', qty);
    confirmBtn.addEventListener('click', confirmPurchase);
}

function confirmPurchase(ev) {
    const id = ev.target.id;
    const qty = ev.target.getAttribute('qty');

    const postUrl = `https://baas.kinvey.com/rpc/${appKey}/custom/purchase?venue=${id}&qty=${qty}`;
    const headers = {
        method: 'POST',
        credentials: 'include',
        Authorization: 'Basic ' + btoa(`${kinveyUser}:${kinveyPass}`),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(postUrl, headers)
    .then(handler)
    .then(displayPurchase)
}

function displayPurchase(data) {
    elements.venueInfo.innerHTML = 'You may print this page as your ticket\n' + data.html;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }

    return response.json();
}