const homeController = function () {

    const getHomeGuest = function (context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function () {

            if (storage.getData('loggedIn')) {
                getHomeUser(context);
            } else {
                this.partial('../views/home/home-guest-template.hbs');
            }
        });
    };

    const getHomeUser = function (context) {
        eventModel.listEvents()
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/site-nav-template.hbs',
                    footer: '../views/common/site-footer-template.hbs'
                }).then(function () {
                    const userInfo = JSON.parse(storage.getData('userInfo'));

                    context.events = data;
                    context.hasEvents = data.length > 0;
                    context.username = userInfo.username;
                    context.loggedIn = storage.getData('loggedIn');
                    this.partial('../views/home/home-user-template.hbs');
                });
            });
    };

    return {
        getHomeGuest,
        getHomeUser
    };
}();