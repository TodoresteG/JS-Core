const catalogController = function() {

    const getCatalog = function(context) {
        const hasNoTeam = true;
        const loggedIn = storage.getData('userInfo') !== undefined;
        const username = JSON.parse(storage.getData('username'));

        context.hasNoTeam = hasNoTeam;
        context.loggedIn = loggedIn;
        context.username = username;

        catalogModel.getTeams()
        .then(helper.handler)
        .then(data => {
            const teams = data;
            context.teams = teams;

            for(const team of data) {
                context.name = team.name;
                context.comment = team.description;

                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function() {
                    this.partial('../views/catalog/teamCatalog.hbs');
                });
            }
        });
    };

    const getCreate = function(context) {
        const loggedIn = storage.getData('userInfo') !== undefined;
        const username = JSON.parse(storage.getData('username'));

        context.loggedIn = loggedIn;
        context.username = username;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/create/createPage.hbs');
        });
    };

    const postCreate = function(context) {
        catalogModel.createTeam(context.params)
        .then(helper.handler)
        .then(data => {
            getCatalog(context);
        });
    };

    const getTeam = function(context) {
        const loggedIn = storage.getData('userInfo') !== undefined;
        const username = JSON.parse(storage.getData('username'));

        context.loggedIn = loggedIn;
        context.username = username;

        catalogModel.getTeamInfo(context.params)
        .then(helper.handler)
        .then(data => {
            context.name = data.name;
            context.comment = data.description;

            context.loadPartials({
                header: '../views/common/header.hbs',
                footer: '../views/common/footer.hbs'
            }).then(function() {
                this.partial('../views/catalog/details.hbs');
            });
            console.log(data);
        });
    };

    return {
        getCatalog,
        getCreate,
        postCreate,
        getTeam
    };
}();