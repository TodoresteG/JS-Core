const app = Sammy('#container', function() {
    this.use('Handlebars', 'hbs');

    // Home Guest
    this.get('#/home', homeController.getHomeGuest);

    // Register user
    this.get('#/register', userController.getRegisterForm);
    this.post('#/register', userController.postRegister);

    // Login user
    this.get('#/login', userController.getLoginForm);
    this.post('#/login', userController.postLogin);

    // Logout user
    this.get('#/logout', userController.logout);

    // Cinema page
    this.get('#/cinema', movieController.getCinema);

    // Create Movie
    this.get('#/create', movieController.getCreateForm);
    this.post('#/create', movieController.postMovie);

    // Buy ticket
    this.get('#/buy/:movieId', movieController.buyTicket);

    // Movie details
    this.get('#/details/:movieId', movieController.getDetails);

    // My movies
    this.get('#/my-movies', movieController.getMyMovies);

    // Edit movies
    this.get('#/edit-movie/:movieId', movieController.getEditForm);
    this.put('#/edit-movie/:movieId', movieController.putEdit);

    // Delete movie
    this.get('#/delete-movie/:movieId', movieController.getDeleteForm);
    this.del('#/delete-movie/:movieId', movieController.deleteMovie);
});

(function() {
    app.run('#/home');
}());