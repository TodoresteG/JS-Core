const movieController = function () {

    const getCinema = function (context) {
        movieModel.listMovies()
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.movies = data;
                    context.loggedIn = true;
                    context.username = JSON.parse(storage.getData('userInfo')).username;

                    this.partial('../views/movies/movies-list.hbs');
                });
            });
    };

    const getCreateForm = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            context.loggedIn = true;
            context.username = JSON.parse(storage.getData('userInfo')).username;

            this.partial('../views/create/create-movie.hbs');
        });
    };

    const postMovie = function (context) {
        movieModel.createMovie(context.params)
            .then(helper.handler)
            .then(data => {
                homeController.getHomeGuest(context);
            });
    };

    const buyTicket = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                movieModel.buy(data)
                    .then(helper.handler)
                    .then(m => {
                        getCinema(context);
                    });
            });
    };

    const getDetails = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;
                    context.username = JSON.parse(storage.getData('userInfo')).username;

                    context.title = data.title;
                    context.imageURL = data.imageURL;
                    context.description = data.description;
                    context.genres = data.genres;
                    context.tickets = data.tickets;
                    context._id = data._id;

                    this.partial('../views/details/details-movie.hbs');
                });
            });
    };

    const getMyMovies = function (context) {
        movieModel.listMovies()
            .then(helper.handler)
            .then(data => {
                const userId = JSON.parse(storage.getData('userInfo'))._id;

                const myMovies = [...data].filter(x => x._acl.creator === userId);

                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.movies = myMovies;
                    context.loggedIn = true;
                    context.username = JSON.parse(storage.getData('userInfo')).username;

                    this.partial('../views/movies/my-movies-list.hbs');
                });
            });
    };

    const getEditForm = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;
                    context.username = JSON.parse(storage.getData('userInfo')).username;

                    context.title = data.title;
                    context.imageURL = data.imageURL;
                    context.description = data.description;
                    context.genres = data.genres;
                    context.tickets = data.tickets;
                    context._id = data._id;

                    this.partial('../views/edit/edit-movie.hbs');
                });
            });
    };

    const putEdit = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                movieModel.editMovie(data)
                    .then(helper.handler)
                    .then(data => {
                        getMyMovies(context);
                    });
            });
    };

    const getDeleteForm = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;
                    context.username = JSON.parse(storage.getData('userInfo')).username;

                    context.title = data.title;
                    context.imageURL = data.imageURL;
                    context.description = data.description;
                    context.genres = data.genres;
                    context.tickets = data.tickets;
                    context._id = data._id;

                    this.partial('../views/delete/delete-movie.hbs');
                });
            });
    };

    const deleteMovie = function (context) {
        movieModel.getTicket(context.params)
            .then(helper.handler)
            .then(data => {
                movieModel.removeMovie(data)
                    .then(helper.handler)
                    .then(data => {
                        getMyMovies(context);
                    });
            });
    };

    return {
        getCinema,
        getCreateForm,
        postMovie,
        buyTicket,
        getDetails,
        getMyMovies,
        getEditForm,
        putEdit,
        getDeleteForm,
        deleteMovie,
    };
}();