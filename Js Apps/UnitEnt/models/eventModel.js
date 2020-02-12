const eventModel = function () {

    const listEvents = function () {
        const url = `/appdata/${storage.appKey}/events`;

        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
        };

        return requester.get(url, headers);
    };

    const createEvent = function (params) {
        const userInfo = JSON.parse(storage.getData('userInfo'));

        const event = {
            name: params.name,
            date: params.dateTime,
            description: params.description,
            imageURL: params.imageURL,
            organizer: userInfo.username,
            people: 0
        };

        const url = `/appdata/${storage.appKey}/events`;

        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(event),
        };

        return requester.post(url, headers);
    };

    const getEvent = function (eventId) {
        const url = `/appdata/${storage.appKey}/events/${eventId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
        };

        return requester.get(url, headers);
    };

    const editEvent = function (params) {
        const userInfo = JSON.parse(storage.getData('userInfo'));

        const event = {
            name: params.name,
            date: params.dateTime,
            description: params.description,
            imageURL: params.imageURL,
            organizer: userInfo.username,
            people: 0
        };

        const url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(event),
        };

        return requester.put(url, headers);
    };

    const deleteEvent = function (params) {
        const url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
        };

        return requester.del(url, headers);
    };

    const join = function(params) {
        const userInfo = JSON.parse(storage.getData('userInfo'));

        const event = {
            people: params.people += 1,
        };

        const url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(event),
        };

        return requester.put(url, headers);
    };

    return {
        createEvent,
        listEvents,
        getEvent,
        editEvent,
        deleteEvent
    };
}();