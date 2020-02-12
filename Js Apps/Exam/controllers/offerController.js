const offerController = function () {

    // Fix the custom ids
    const getOffers = function (context) {
        offerModel.listOffers()
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    const userInfo = JSON.parse(storage.getData('userInfo'));

                    [...data].forEach(offer => {
                        offer['isCreator'] = userInfo._id === offer._acl.creator;
                    });

                    context.offers = data;
                    context.loggedIn = true;

                    this.partial('../views/dashboard/dashboard.hbs');
                });
            });
    };

    const getCreateForm = function (context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            context.loggedIn = true;
            this.partial('../views/create/create-offer.hbs');
        });
    };

    const postCreate = function (context) {
        offerModel.createOffer(context.params)
            .then(helper.handler)
            .then(data => {
                console.log(data);
                getOffers(context);
            });
    };

    const getEditForm = function (context) {
        offerModel.getOffer(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;

                    context.id = data._id;
                    context.product = data.product;
                    context.description = data.description;
                    context.price = data.price;
                    context.pictureUrl = data.pictureUrl;

                    this.partial('../views/edit/edit-offer.hbs');
                });
            });
    };

    const postEdit = function (context) {
        offerModel.getOffer(context.params)
            .then(helper.handler)
            .then(data => {
                offerModel.editOffer(data)
                    .then(helper.handler)
                    .then(x => {
                        getOffers(context);
                    });
            });
    };

    const getDeleteForm = function (context) {
        offerModel.getOffer(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;

                    context.id = data._id;
                    context.product = data.product;
                    context.description = data.description;
                    context.price = data.price;
                    context.pictureUrl = data.pictureUrl;

                    this.partial('../views/delete/delete-offer.hbs');
                });
            });
    };

    const deleteOffer = function (context) {
        offerModel.getOffer(context.params)
            .then(helper.handler)
            .then(data => {
                offerModel.removeOffer(data)
                    .then(helper.handler)
                    .then(x => {
                        getOffers(context);
                    });
            });
    };

    const getDetails = function (context) {
        offerModel.getOffer(context.params)
            .then(helper.handler)
            .then(data => {
                context.loadPartials({
                    header: '../views/common/header.hbs',
                    footer: '../views/common/footer.hbs'
                }).then(function () {
                    context.loggedIn = true;

                    context.product = data.product;
                    context.description = data.description;
                    context.price = data.price;
                    context.pictureUrl = data.pictureUrl;

                    this.partial('../views/details/offer-details.hbs');
                });
            });
    };

    const buyProduct = function(context) {
        JSON.parse(storage.getData('boughtProducts')).products += 1;

        console.log(JSON.parse(storage.getData('boughtProducts')));

        getOffers(context);
    };

    return {
        getOffers,
        getCreateForm,
        postCreate,
        getEditForm,
        postEdit,
        getDeleteForm,
        deleteOffer,
        getDetails,
        buyProduct
    };
}();