const homeController = function () {

    const getHomeGuest = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            const loggedIn = storage.getData('userInfo') !== null;

            if (loggedIn) {
                const user = JSON.parse(storage.getData('userInfo'));

                context.loggedIn = loggedIn;
                context.username = user.username;
            }

            this.partial('../views/home/home-guest.hbs');
        });
    };

    return {
        getHomeGuest
    };
}();