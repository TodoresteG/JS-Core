const userController = function () {

    const getRegisterForm = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/register/register.hbs');
        });
    };

    const postRegister = function(context) {
        userModel.register(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHomeGuest(context);
        });
    };

    const getLoginForm = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/login/login.hbs');
        });
    };

    const postLogin = function(context) {
        userModel.login(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHomeGuest(context);
        });
    };

    const logout = function(context) {
        userModel.logout()
        .then(helper.handler)
        .then(data => {
            storage.deleteUser();
            homeController.getHomeGuest(context);
        });
    };

    return {
        getRegisterForm,
        postRegister,
        getLoginForm,
        postLogin,
        logout
    };
}();