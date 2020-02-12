const movieModel = function () {

    const listMovies = function () {
        const url = `/appdata/${storage.appKey}/movies?query={}&sort={}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    const createMovie = function (params) {
        const data = {
            title: params.title,
            imageURL: params.imageUrl,
            description: params.description,
            genres: params.genres,
            tickets: params.tickets
        };

        const url = `/appdata/${storage.appKey}/movies`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(data)
        };

        return requester.post(url, headers);
    };

    const getTicket = function (params) {
        const url = `/appdata/${storage.appKey}/movies/${params.movieId}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    const buy = function (data) {
        const url = `/appdata/${storage.appKey}/movies/${data._id}`;
        const token = JSON.parse(storage.getData('authToken'));

        if (data.tickets > 0) {
            data.tickets -= 1;
        }

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(data)
        };

        return requester.put(url, headers);
    };

    const editMovie = function(params) {
        const title = document.querySelector('#editTitle').value;
        const image = document.querySelector('#editImage').value;
        const description = document.querySelector('#editDescription').value;
        const genres = document.querySelector('#editGenres').value;
        const tickets = document.querySelector('#editTickets').value;

        const data = {
            title: title,
            imageURL: image,
            description: description,
            genres: genres,
            tickets: tickets
        };

        const url = `/appdata/${storage.appKey}/movies/${params._id}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
            body: JSON.stringify(data)
        };

        return requester.put(url, headers);
    };

    const removeMovie = function(params) {
        const url = `/appdata/${storage.appKey}/movies/${params._id}`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.del(url, headers);
    };

    return {
        listMovies,
        createMovie,
        getTicket,
        buy,
        editMovie,
        removeMovie
    };
}();