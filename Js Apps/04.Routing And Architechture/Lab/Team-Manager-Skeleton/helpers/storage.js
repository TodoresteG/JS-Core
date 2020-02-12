const storage = function() {
    const appKey = 'kid_SJO8xmPzS';
    const appSecret = '9184973fedf9429d9e80f0af9c3ab12b';

    const getData = function(key) {
        return localStorage.getItem(key);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
        saveData('username', data.username);
    };

    const deleteUser = function() {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
    };

    return {
        getData,
        saveData,
        saveUser,
        deleteUser,
        appKey,
        appSecret
    };
}();