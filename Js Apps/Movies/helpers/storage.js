const storage = function() {
    
    const appKey = 'kid_HJzdf_WmH';
    const appSecret = '51a1103d1d1b4e79adeea6a04aa63e8b';

    const getData = function(key) {
        return localStorage.getItem(key);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function() {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
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