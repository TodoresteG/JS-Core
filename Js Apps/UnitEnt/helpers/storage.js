const storage = function() {
    
    const appKey = 'kid_SkT-gyozS';
    const appSecret = '1aa3d8a04d3c461f8db59775bc6659bc';

    const getData = function(key) {
        return localStorage.getItem(key);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
        saveData('loggedIn', true);
    };

    const deleteUser = function() {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
        localStorage.removeItem('loggedIn');
    };

    return {
        appKey,
        appSecret,
        getData,
        saveData,
        saveUser,
        deleteUser
    };
}();