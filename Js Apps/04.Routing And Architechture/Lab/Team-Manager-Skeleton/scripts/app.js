const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);
    this.get('#/about', homeController.getAbout);

    //User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Catalog
    this.get('#/catalog', catalogController.getCatalog);
    this.get('#/catalog/:5d39c6a71b953833e86b7ec7', catalogController.getTeam);
    this.get('#/create', catalogController.getCreate);
    this.post('#/create', catalogController.postCreate);
});

(function() {
    app.run('#/home');
}());