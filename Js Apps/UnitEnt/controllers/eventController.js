const eventController = function () {

    const getOrganizeForm = function (context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function () {
            this.partial('../views/create/organize-event-template.hbs');
            const userInfo = JSON.parse(storage.getData('userInfo'));
            context.loggedIn = storage.getData('loggedIn');
            context.username = userInfo.username;
        });
    };

    const postEvent = function (context) {
        eventModel.createEvent(context.params)
            .then(helper.handler)
            .then(data => {
                homeController.getHomeUser(context);
                const userInfo = JSON.parse(storage.getData('userInfo'));
                context.loggedIn = storage.getData('loggedIn');
                context.username = userInfo.username;
            });
    };

    const getDetailsPage = function (context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function (data) {

            eventModel.getEvent(context.params.eventId)
                .then(helper.handler)
                .then(e => {
                    const userInfo = JSON.parse(storage.getData('userInfo'));
                    context.loggedIn = storage.getData('loggedIn');
                    context.username = userInfo.username;

                    context.id = e._id;
                    context.name = e.name;
                    context.date = e.date;
                    context.description = e.description;
                    context.imageURL = e.imageURL;
                    context.people = e.people;
                    context.organizer = e.organizer;
                    context.isOrganized = e.organizer === userInfo.username;

                    this.partial('../views/event/event-details-template.hbs');
                });
        });
    };

    const getEditForm = function (context) {
        context.loadPartials({
            header: '../views/common/site-nav-template.hbs',
            footer: '../views/common/site-footer-template.hbs'
        }).then(function () {
            this.partial('../views/edit/edit-event-template.hbs');
            const userInfo = JSON.parse(storage.getData('userInfo'));
            context.loggedIn = storage.getData('loggedIn');
            context.username = userInfo.username;
            context.id = context.params.eventId;
        });
    };

    const updateEvent = function (context) {
        eventModel.editEvent(context.params)
            .then(helper.handler)
            .then(data => {
                homeController.getHomeUser(context);
                const userInfo = JSON.parse(storage.getData('userInfo'));
                context.loggedIn = storage.getData('loggedIn');
                context.username = userInfo.username;
            });
    };

    const closeEvent = function (context) {
        eventModel.deleteEvent(context.params)
            .then(helper.handler)
            .then(data => {
                homeController.getHomeUser(context);
                const userInfo = JSON.parse(storage.getData('userInfo'));
                context.loggedIn = storage.getData('loggedIn');
                context.username = userInfo.username;
            });
    };

    const joinEvent = function (context) {
        eventModel.getEvent(context.params.eventId)
            .then(helper.handler)
            .then(data => {
                homeController.getHomeUser(context);
                const userInfo = JSON.parse(storage.getData('userInfo'));
                context.loggedIn = storage.getData('loggedIn');
                context.username = userInfo.username;
            });
    };

    return {
        getOrganizeForm,
        postEvent,
        getDetailsPage,
        getEditForm,
        updateEvent,
        closeEvent,
        joinEvent
    };
}();