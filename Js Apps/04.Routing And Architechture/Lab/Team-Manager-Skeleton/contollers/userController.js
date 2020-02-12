const userController = function() {
    
    const getRegister = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/register/registerPage.hbs');
        });
    };

    const getLogin = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/login/loginPage.hbs');
        });
    };

    const postRegister = function(context) {
        userModel.register(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHome(context);
        });
    };

    const postLogin = function(context) {
        const loggedIn = storage.getData('userInfo') !== undefined;
        const username = context.params.username;
        
        context.loggedIn = loggedIn;
        context.username = username;

        userModel.login(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHome(context);
        });
    };

    const logout = function(context) {
        userModel.logout()
        .then(helper.handler)
        .then(data => {
            storage.deleteUser();
            homeController.getHome(context);
        });
    };

    return {
        getRegister,
        getLogin,
        postRegister,
        postLogin,
        logout
    };
}();