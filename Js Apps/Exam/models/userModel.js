const userModel = function () {

    const register = function (params) {
        if (params.username !== '' && params.password === params.rePassword) {
            const user = {
                username: params.username,
                password: params.password
            };

            const url = `/user/${storage.appKey}/`;

            const auth = btoa(`${storage.appKey}:${storage.appSecret}`);
            const authString = `Basic ${auth}`;

            const headers = {
                headers: {
                    Authorization: authString
                },
                body: JSON.stringify(user)
            };

            return requester.post(url, headers);
        } else {
            alert('Invalid credentials');
        }
    };

    const login = function (params) {
        const user = {
            username: params.username,
            password: params.password
        };

        const url = `/user/${storage.appKey}/login`;

        const auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        const authString = `Basic ${auth}`;

        const headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify(user)
        };

        return requester.post(url, headers);
    };

    const logout = function () {
        const url = `/user/${storage.appKey}/_logout`;

        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.post(url, headers);
    };

    return {
        register,
        login,
        logout
    };
}();