const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHomeGuest);

    //Register
    this.get('#/register', userController.getRegistrationForm);
    this.post('#/register', userController.postRegister);

    //Login
    this.get('#/login', userController.getLoginForm);
    this.post('#/login', userController.postLogin);

    //Organize Event
    this.get('#/organize', eventController.getOrganizeForm);
    this.post('#/organize', eventController.postEvent);

    //Profile
    this.get('#/profile', userController.getProfile);

    //Logout
    this.get('#/logout', userController.logout);

    //Event Details
    this.get('#/details/:eventId', eventController.getDetailsPage);
    
    this.get('#/edit/:eventId', eventController.getEditForm);
    this.put('#/edit/:eventId', eventController.updateEvent);

    this.get('#/close/:eventId', eventController.closeEvent);

    this.put('#/home', eventController.joinEvent);
});

(function() {
    app.run('#/home');
}());