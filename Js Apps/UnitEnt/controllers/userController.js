const userController = function() {
    
    const getRegistrationForm = function(context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function() {
            this.partial('../views/register/register-template.hbs');
        });
    }; 

    const postRegister = function(context) {
        userModel.register(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHomeUser(context);
            const userInfo = JSON.parse(storage.getData('userInfo'));
            context.loggedIn = storage.getData('loggedIn');
            context.username = userInfo.username;
        });
    };

    const getLoginForm = function(context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function() {
            this.partial('../views/login/login-template.hbs');
        });
    };

    const postLogin = function(context) {
        userModel.login(context.params)
        .then(helper.handler)
        .then(data => {
            storage.saveUser(data);
            homeController.getHomeUser(context);
            const userInfo = JSON.parse(storage.getData('userInfo'));
            context.loggedIn = storage.getData('loggedIn');
            context.username = userInfo.username;
        });
    };

    const getProfile = function(context) {
        eventModel.listEvents()
        .then(helper.handler)
        .then(data => {
            context.loadPartials({
                header: '../views/common/site-nav-template.hbs',
                footer: '../views/common/site-footer-template.hbs'
            }).then(function() {
                const userInfo = JSON.parse(storage.getData('userInfo'));
                const createdEvents = [...data].filter(x => x.organizer === userInfo.username);

                context.events = createdEvents;
                context.organizedEvents = createdEvents.length;
                context.hasEvents = createdEvents.length > 0;
                context.username = userInfo.username;
                context.loggedIn = storage.getData('loggedIn');
                this.partial('../views/profile/profile-info-template.hbs');
            });
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
        getRegistrationForm,
        postRegister,
        getLoginForm,
        postLogin,
        getProfile,
        logout
    };
}();