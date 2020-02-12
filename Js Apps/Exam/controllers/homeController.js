const homeController = function() {
    
    const getHome = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            const loggedIn = storage.getData('userInfo') !== null;

            if (loggedIn) {
                context.loggedIn = loggedIn;
            }

            this.partial('../views/home/home.hbs');
        });
    };

    return {
        getHome
    };
}();