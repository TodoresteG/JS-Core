const catalogModel = function() {
    
    const createTeam = function(params) {
        const data = {
            name: params.name,
            comment: params.comment
        };

        const url = `/appdata/${storage.appKey}/teams`;

        const token = JSON.parse(storage.getData('authToken'));

        const authString = `Kinvey ${token}`;

        const headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify(data)
        };

        return requester.post(url, headers);
    };

    const getTeams = function() {
        const url = `/appdata/${storage.appKey}/teams`;

        const token = JSON.parse(storage.getData('authToken'));
        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    const getTeamInfo = function(params) {
        const id = Object.keys(params)[0];
        const url = `/appdata/${storage.appKey}/teams/${id}`;

        const token = JSON.parse(storage.getData('authToken'));
        const headers = {
            headers: {
                Authorization: `Kinvey ${token}`
            }
        };

        return requester.get(url, headers);
    };

    return {
        createTeam,
        getTeams,
        getTeamInfo
    };
}();