const offerModel = function () {

    const listOffers = function () {
        const url = `/appdata/${storage.appKey}/offers`;

        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    const createOffer = function (params) {
        if (params.product && params.description && params.price && params.pictureUrl) {
            const offer = {
                product: params.product,
                description: params.description,
                price: params.price,
                pictureUrl: params.pictureUrl,
                creator: JSON.parse(storage.getData('userInfo')).username
            };

            const url = `/appdata/${storage.appKey}/offers`;

            const token = JSON.parse(storage.getData('authToken'));

            const headers = {
                headers: {
                    Authorization: `Kinvey ${token}`
                },
                body: JSON.stringify(offer)
            };

            return requester.post(url, headers);
        } else {
            alert('All input fileds must be non-empty!');
        }
    };

    const getOffer = function (params) {
        const url = `/appdata/${storage.appKey}/offers/${params.offerId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    const editOffer = function (params) {
        const product = document.querySelector('#product').value;
        const description = document.querySelector('#description').value;
        const price = document.querySelector('#price').value;
        const pictureUrl = document.querySelector('#pictureUrl').value;

        const data = {
            product: product,
            description: description,
            price: price,
            pictureUrl: pictureUrl
        };

        const url = `/appdata/${storage.appKey}/offers/${params._id}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(data)
        };

        return requester.put(url, headers);
    };

    const removeOffer = function (params) {
        const url = `/appdata/${storage.appKey}/offers/${params._id}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.del(url, headers);
    };

    return {
        listOffers,
        createOffer,
        getOffer,
        editOffer,
        removeOffer,
    };
}();