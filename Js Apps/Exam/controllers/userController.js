const userController = function () {

    const getLoginForm = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/login/login-form.hbs');
        });
    };

    const getRegisterForm = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/register/register-form.hbs');
        });
    };

    const postRegister = function (context) {
        userModel.register(context.params)
            .then(helper.handler)
            .then(data => {
                context.loggedIn = true;
                storage.saveUser(data);
                homeController.getHome(context);
            });
    };

    const postLogin = function (context) {
        userModel.login(context.params)
            .then(helper.handler)
            .then(data => {
                storage.saveUser(data);
                context.loggedIn = true;
                homeController.getHome(context);
            });
    };

    const logout = function (context) {
        userModel.logout()
            .then(helper.handler)
            .then(data => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    const getProfile = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            context.loggedIn = true;
            context.purchases = JSON.parse(storage.getData('boughtProducts')).products;

            this.partial('../views/profile/user-profile.hbs');
        });
    };

    return {
        getLoginForm,
        getRegisterForm,
        postRegister,
        postLogin,
        logout,
        getProfile
    };
}();