const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // Register
    this.get('#/register', userController.getRegisterForm);
    this.post('#/register', userController.postRegister);

    // Login
    this.get('#/login', userController.getLoginForm);
    this.post('#/login', userController.postLogin);

    // Logout
    this.get('#/logout', userController.logout);

    // Create offer
    this.get('#/create-offer', offerController.getCreateForm);
    this.post('#/create-offer', offerController.postCreate);

    // Dashboard
    this.get('#/dashboard', offerController.getOffers);

    // Offer details
    this.get('#/offer-details/:offerId', offerController.getDetails);

    // Edit offer 
    this.get('#/edit-offer/:offerId', offerController.getEditForm);
    this.put('#/edit-offer/:offerId', offerController.postEdit);

    // Delete offer
    this.get('#/delete-offer/:offerId', offerController.getDeleteForm);
    this.del('#/delete-offer/:offerId', offerController.deleteOffer);

    // Profile page
    this.get('#/profile', userController.getProfile);
});

(function() {
    app.run('#/home');
}());