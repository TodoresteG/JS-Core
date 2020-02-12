const userModel = function() {
    
    const register = function(params) {
        //Validation
        const data = {
            username: params.username,
            password: params.password
        };

        const url = `/user/${storage.appKey}`;

        const auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        const authString = `Basic ${auth}`;

        const headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify(data),
        };

        return requester.post(url, headers);
    };

    const login = function(params) {
        const data = {
            username: params.username,
            password: params.password
        };

        const url = `/user/${storage.appKey}/login`;

        const auth = btoa(`${data.username}:${data.password}`);
        const authString = `Basic ${auth}`;

        const headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify(data)
        };

        return requester.post(url, headers);
    };

    const logout = function() {
        const url = `/user/${storage.appKey}/_logout`;
        const token = JSON.parse(storage.getData('authToken'));

        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            },
        };
        
        return requester.post(url, headers);
    };

    return {
        register,
        login,
        logout
    };
}();